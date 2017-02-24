import React from 'react';
import HeaderContainer from '../header_container';
import merge from 'lodash/merge';
import CampaignContainer from '../campaign/campaign_container';
import Perks from './perks';
import {withRouter} from 'react-router'
import Footer from '../footer';


class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state=this.defaultState();
    this.update = this.update.bind(this);
  }

  defaultState(){
    return {
      editor: this.props.editor,
      mode: "basics",
      video: false,
      perk: {},
      overviewFile: null,
      overviewURL: null,
      cardFile:null,
      cardURL:null,
      mainFile:null,
      mainURL:null,
      errors:{},
      ready: false
    };
  }

  componentDidMount(){

    // cloudinary.openUploadWidget(window.cloudinary_options,(errs,out)=>{
    //   this.updateUrl(errs,out)
    // })
    this.props.fetchEditor(this.props.params.campaign_id);
  }

  componentWillReceiveProps(newProps){
    console.log(newProps.errors)
    const e = newProps.editor;
    this.setState({editor:newProps.editor, overviewURL:e.overview_img_url, cardURL:e.campaign_card_img_url, mainURL:e.main_img_url})
  }

  // updateImages(){
  //   const e = this.props.editor;
  //   this.setState({overviewURL:e.overview_img_url, cardURL:e.campaign_card_img_url, mainURL:e.main_img_url})
  // }

  createHeader(){
    let launchTitle = (this.state.ready ? "launch campaign" : "Not Ready, Missing Info")

    return(
      <div className="editor-topheader clearfix">
        <h1>campaign /</h1> <h1> {this.state.mode}</h1>
        <div className="editor-header-button-group">
          <button onClick={this.renderPreview.bind(this)}>Preview</button>
          <button onClick={this.saveCampaign.bind(this)} >Save Campaign</button>
          <button onClick={this.launchCampaign.bind(this)}>launch campaign</button>
        </div>
      </div>
    );
    // <button className={(!this.state.ready ? "editor-launch-disabled" : "")} disabled={!this.state.ready} onClick={this.launchCampaign.bind(this)}>{launchTitle}</button>
  }

  launchCampaign(){
    this.saveCampaign({status: 'open'}).then(res=>(this.props.router.push(`/campaign/${res.editor.id}`)))
    // this.props.updateCampaign(merge({},this.state.editor,{status: 'open'})).then(res=>(this.props.router.push(`/campaign/${res.editor.id}`)))
  }

  saveCampaign(addl={}){
    // debugger
    if(!this.validation()){
      console.log("validation failed")
      // console.log(this.state.errors)
      return;
    }
    let formData = new FormData();
    // formData.append()
    const addl_keys = Object.keys(addl);
    Object.keys(this.state.editor).forEach(key=>{
      if(!addl_keys.includes(key)){
        formData.append(`campaign[${key}]`, this.state.editor[key])
      }
    })

    if(this.state.overviewFile !== null){
      formData.append("campaign[overview_img]", this.state.overviewFile)
    }
    if(this.state.cardFile !== null){
      formData.append("campaign[campaign_card_img]", this.state.cardFile)
    }
    if(this.state.mainFile !== null){
      formData.append("campaign[main_img]",this.state.mainFile)
    }

    addl_keys.forEach((key)=>{
      formData.append(`campaign[${key}]`,addl[key])
    })

    // return
    return this.props.updateCampaign(formData)
    // debugger
    // return this.props.updateCampaign(merge({},this.state.editor,{overview_img: this.state.overviewFile}));
  }

  update(field,hash='editor'){

    return (e)=>this.setState({[hash]:merge({},this.state[hash],{[field]:e.target.value})});
  }

  renderPreview(){
    return  this.saveCampaign().then(res=>{
      // debugger
      this.setState({mode:'preview'})
      });
  }
  // <Campaign/>
  //
  inputGen(name,field,hash,type='text'){
    // debugger
    let counter = 0;
    if(this.state[hash][field] !== null){
      counter = (<span>{this.state[hash][field].length}</span>)
    }
    return(
      <div className="editor-generated-input">

        <div>
          <label>{name}</label>
          <input type={type} value={this.state[hash][field]} onChange={this.update(field,hash)}/>
          <span className="editor-error-span">{this.state.errors[field]}</span>
          {type === 'number' ? "" : counter }
        </div>
      </div>
    );
  }

  optionGen(){
    const CATEGORIES = {
      'tech':'Tech',
      'film':'Film',
      'small_business':"Small Business",
      'community':'Community',
      'music':'Music',
      'education':'Education',
      'design':'Design',
      'environment':'Environment',
      'gaming':'Gaming',
      'web':'Video / Web'
    };

    return Object.keys(CATEGORIES).map(value=>{
      const title = CATEGORIES[value];
      return(
        <option key={"catsel"+value} value={value}>{title}</option>
      );
    });
  }

  validation(){
    let output = {};
    let clear = true;
    const e = this.state.editor;

    if(e.title.length <= 0 || e.title.length > 50){
      output['title']="Title is required and cannot be over 50 characters long"
      clear=false;
    }
    if(e.goal_amount < 500){
      output['goal_amount']="Goal amount must be at least 500."
      clear=false;
    }
    if(e.tagline.length <=0){
      output['tagline']="Tagline is required"
      clear=false;
    }
    if(e.duration < 7  || e.duration > 60){
      clear=false;
      output['duration']="Duration must be between 7 and 60 days in length"
    }
    if(e.pitch_text.length  ===  0 ){
      clear=false;
      output['pitch_text']="A Campaign Pitch is required"
    }
    this.setState({ready:clear, errors:output});
    return clear;

  }


  selectRender(){
    return(
      <select value={this.state.editor.category} onChange={this.update('category')}>
        {this.optionGen()}
      </select>
    )
  }

  renderBasics(){
    // debugger
    // style="opacity: 0.0; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height:100%;
    return(
      <div className="basics-form editor-form">
        <form>
          {this.inputGen('Campaign Title','title','editor')}

          {this.inputGen('Goal Amount','goal_amount','editor','number')}

          {this.inputGen('Tagline','tagline','editor')}

          <label>Campaign Card Image</label>
          <div className="editor-image-uploader card-img">
            <img src={this.state.cardURL}/>
            <input className="big-filepicker" type="file" onChange={this.updateFile('card').bind(this)}/>
          </div>
          <label>Category</label>
          {this.selectRender()}
          {this.inputGen('Duration','duration','editor','number')}

          <label>Funding Type</label>
          <select value={this.state.editor.funding_type} onChange={this.update('funding_type')}>
            <option value="fixed">Fixed</option>
            <option value="flexible">Flexible</option>
          </select>
        </form>
      </div>
    );
  }

  toggleVideo(mode){
    return (e)=>(this.setState({video:mode}))
  }

  updateFile(value){
    return (e)=>{
      const file = e.target.files[0]
      const fileReader = new FileReader();
      fileReader.onloadend = ()=>{
        this.setState({[`${value}File`]:file, [`${value}URL`]: fileReader.result })
      }
      if(file) fileReader.readAsDataURL(file);
    }
  }

  renderStory(){
    // let content = this.inputGen('Video URL','video_url')
    // if(!this.state.video){
    //   //TODO content = this.inputGen('Main Campaign Image URL','main_img_url');
    // }
    // debugger
    // <img src={this.state.editor.campaign_card_img_url}/>
    // <div className="media_selector">
    //   <button onClick={this.toggleVideo(true).bind(this)}>Video</button>
    //   <button onClick={this.toggleVideo(false).bind(this)}>Image</button>
    // </div>
    // debugger
    return(
      <div className="story-form editor-form">
        <form>
          <label>Pitch Image</label>
          <div className="editor-image-uploader main-img">
            <img src={this.state.mainURL}/>
            <input className="big-filepicker" type="file" onChange={this.updateFile('main').bind(this)}/>
          </div>
          <label>Overview Image</label>
          <div className="editor-image-uploader overview-img">
            <img src={this.state.overviewURL}/>
            <input className="big-filepicker" type="file" onChange={this.updateFile('overview').bind(this)}/>
          </div>
          <label>Campaign Pitch</label>
            <textarea value={this.state.editor.pitch_text} onChange={this.update('pitch_text')}/>
            <span>{this.state.errors.pitch_text}</span>

        </form>
      </div>
    );
  }


  renderPerks(){
    return(<Perks id={this.props.params.campaign_id}/>);
  }

  createSideHeader(){
    const e = this.state.editor;
    const sel ="sideheader-selected";
    return(
      <div className="side-header">
        <div className="side-header-statusline"><span className={`status-${e.status}`}>{e.status} campaign</span></div>
        <div className="side-header-title">{e.title}</div>
        <ul>
          <li className={this.state.mode==='preview' ? sel : ""} onClick={this.renderPreview.bind(this)}>Preview Campaign</li>
          <li className={this.state.mode==='basics' ? sel : ""} onClick={this.modeChange('basics').bind(this)}>1. basics</li>
          <li className={this.state.mode==='story' ? sel : ""} onClick={this.modeChange('story').bind(this)}>2. story</li>
          <li className={this.state.mode==='perks' ? sel : ""} onClick={this.modeChange('perks').bind(this)}>3. perks</li>
        </ul>
      </div>
    )
  }
  // <div className={this.state.mode==='basics' ? sel : ""}></div>

  modeChange(mode){
    return (e) => (this.setState({mode:mode}))
  }



  render(){
    // debugger
    console.log("editor render")
    // debugger
    if(this.props.editor === undefined || this.props.editor.title === undefined){
      return null;
    }
    console.log(this.state.errors)
    let content = "";

    switch(this.state.mode){
      case "basics":
        content = this.renderBasics();
        break;

      case "story":
        content = this.renderStory();
        break;

      case "perks":
        content = this.renderPerks();
        break;


      case "preview":
      // debugger
        content=(<CampaignContainer alt_cid={this.state.editor.id}/>);
        break;


    }

    // debugger
    let e = this.state.editor;
    // debugger
    return(
      <div className="editor-page">
        {this.createSideHeader()}

        <div className="editorContent">
          <div className="top-headers">

            <HeaderContainer/>
            {this.createHeader()}

          </div>
          {content}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(Editor);
