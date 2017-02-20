import React from 'react';
import HeaderContainer from '../header_container';
import merge from 'lodash/merge';
import CampaignContainer from '../campaign/campaign_container';


class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editor: this.props.editor,
      mode: "basics",
      video: false,
      perk: {}
    };
    this.update = this.update.bind(this);
  }

  componentDidMount(){
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
        <button>review and launch</button>
      </div>
    );
  }

  saveCampaign(){
    // debugger
    return this.props.updateCampaign(this.state.editor);
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

  renderBasics(){
    // debugger
    return(
      <div className="basics-form">
        <form>
          {this.inputGen('Campaign Title','title')}
          {this.inputGen('Goal Amount','goal_amount')}
          {this.inputGen('Tagline','tagline')}
          {this.inputGen('Campaign Card Image URL','campaign_card_img_url')}
          {this.inputGen('Category ID','category_id')}
          {this.inputGen('Duration','duration')}
          {this.inputGen('Funding Type','funding_type')}
        </form>
      </div>
    );
  }

  toggleVideo(mode){
    return (e)=>(this.setState({video:mode}))
  }

  renderStory(){
    let content = this.inputGen('Video URL','video_url')
    if(!this.state.video){
      content = this.inputGen('Main Campaign Image URL','main_img_url');
    }
    return(
      <div className="story-form">
        <form>
          <div className="media_selector">
            <button onClick={this.toggleVideo(true).bind(this)}>Video</button>
            <button onClick={this.toggleVideo(false).bind(this)}>Image</button>
          </div>
          {content}
          {this.inputGen('Overview Image URL','overview_img_url')}
          <label>Campaign Pitch</label>
            <textarea value={this.state.editor.campaign_pitch} onChange={this.update('campaign_pitch')}/>

        </form>
      </div>
    );
  }

  addPerk(e){
    e.preventDefault();
    this.setState({editor:
      merge({},this.state.editor,{perks:this.state.editor.perks.concat([this.state.perk])})
    })
  }

  editPerk(){

  }

  renderPerks(){
    // debugger
    const perkList = this.state.editor.perks.map((perk,idx)=>(
      <div key={idx} className="perk-entry">
        {perk.title} --- {perk.description}
        {perk.price} <button >edit perk</button>
      </div>
    ));
    // {this.inputGen('id','id','perk')}
    return(
      <div className="perks-container">
        {perkList}
        <form onSubmit={this.addPerk.bind(this)}>
          {this.inputGen('Perk Title','title','perk')}
          {this.inputGen('Description','description','perk')}
          {this.inputGen('price','price','perk')}
          {this.inputGen('total number','total_number','perk')}
          {this.inputGen('eta','eta','perk')}
          <button>Submit</button>
        </form>
      </div>
    );
  }

  // setEditor(editor){
  //   let output = {};
  //   Object.keys.editor.forEach(key=>(
  //     if()
  //   ))
  // }

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

export default Editor;
