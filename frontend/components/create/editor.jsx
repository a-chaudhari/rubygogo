import React from 'react';
import HeaderContainer from '../header_container';
import merge from 'lodash/merge';
import CampaignContainer from '../campaign/campaign_container';
import Perks from './perks';
import {withRouter} from 'react-router'


class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editor: this.props.editor,
      mode: "basics",
      video: false,
      perk: {},
      overviewFile: null,
      overviewURL: null
    };
    this.update = this.update.bind(this);
  }

  componentDidMount(){

    // cloudinary.openUploadWidget(window.cloudinary_options,(errs,out)=>{
    //   this.updateUrl(errs,out)
    // })
    this.props.fetchEditor(this.props.params.campaign_id);
  }

  componentWillReceiveProps(newProps){
    this.setState({editor:newProps.editor})
  }

  createHeader(){
    return(
      <div className="editor-topheader">
        <h1>campaign /</h1> <h1> {this.state.mode}</h1>
        <button onClick={this.renderPreview.bind(this)}>Preview</button>
        <button onClick={this.saveCampaign.bind(this)} >Save Campaign</button>
        <button onClick={this.launchCampaign.bind(this)}>launch campaign</button>
      </div>
    );
  }

  launchCampaign(){
    this.props.updateCampaign(merge({},this.state.editor,{status: 'open'})).then(res=>(this.props.router.push(`/campaign/${res.editor.id}`)))
  }

  saveCampaign(){
    // debugger
    let formData = new FormData();
    // formData.append()
    Object.keys(this.state.editor).forEach(key=>{
      formData.append(`campaign[${key}]`, this.state.editor)
    })
    // debugger
    return this.props.updateCampaign(merge({},this.state.editor,{overview_img: this.state.overviewFile}));
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
  inputGen(name,field,hash='editor'){
    return(
      [(<label>{name}</label>),(<input value={this.state[hash][field]} onChange={this.update(field,hash)}/>)]
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


  selectRender(){
    return(
      <select value={this.state.editor.category} onChange={this.update('category')}>
        {this.optionGen()}
      </select>
    )
  }

  renderBasics(){
    // debugger
    return(
      <div className="basics-form">
        <form>
          {this.inputGen('Campaign Title','title')}
          {this.inputGen('Goal Amount','goal_amount')}
          {this.inputGen('Tagline','tagline')}
          {this.inputGen('Campaign Card Image URL','campaign_card_img_url')}
          {this.selectRender()}
          {this.inputGen('Duration','duration')}
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

      if(file){
        fileReader.readAsDataURL(file);
      }
    }

  }

  renderStory(){
    let content = this.inputGen('Video URL','video_url')
    if(!this.state.video){
      content = this.inputGen('Main Campaign Image URL','main_img_url');
    }
    // debugger
    // <img src={this.state.editor.campaign_card_img_url}/>
    return(
      <div className="story-form">
        <form>
          <div className="media_selector">
            <button onClick={this.toggleVideo(true).bind(this)}>Video</button>
            <button onClick={this.toggleVideo(false).bind(this)}>Image</button>
          </div>
          <input type="file" onChange={this.updateFile('overview').bind(this)}/>
          <img src={this.state.overviewURL}/>
          {content}
          {this.inputGen('Overview Image URL','overview_img_url')}
          <label>Campaign Pitch</label>
            <textarea value={this.state.editor.campaign_pitch} onChange={this.update('campaign_pitch')}/>

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
        <ul>
          <li>{e.status} campaign</li>
          <li>{e.title}</li>
          <li onClick={this.renderPreview.bind(this)}>preview campaign</li>
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
    if(this.props.editor === undefined || this.props.editor.title === undefined){
      return null;
    }

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
      </div>
    )
  }
}

export default withRouter(Editor);
