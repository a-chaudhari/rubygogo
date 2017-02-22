import React from 'react'
import TopChunk from './top_chunk';
import DynamicBoxContainer from './dynamic_box_container';
import PerksBox from './perks_box';

class Campaign extends React.Component{
  constructor(props){
    super(props);
    // debugger
    this.cid=0;
    this.preview=false;
    if(this.props.params === undefined){
        this.cid = this.props.alt_cid;
        this.preview=true;
    }else{
      this.cid =this.props.params.campaign_id;
    }

  }

  componentDidMount(){
    // console.log("did mount");
    // debugger
    this.props.fetchCampaign(this.cid);
  }

  componentWillReceiveProps(newProps){
    // console.log("new props -> new camp")
    // debugger
    if(this.preview) return;

    if(newProps.params.campaign_id !== this.cid){
      this.cid=newProps.params.campaign_id;
      this.props.fetchCampaign(newProps.params.campaign_id);
    }
  }

  overview(){
    const camp = this.props.campaign;

    return(
      <div className="campaign-overview">
        <div className="overview-title">
          <h3>OVERVIEW</h3>
        </div>
        <img src={camp.overview_img_url}/>
        <div className="overview-text">
          {camp.overview_text}
        </div>
      </div>
    );
  }

  render(){
    // debugger
    if(this.props.campaign === undefined){
      return(<p>loading</p>)
    }
    // debugger
    return(
      <div className='campaign'>
        <TopChunk campaign={this.props.campaign}/>
        <PerksBox perks={this.props.campaign.perks}/>
        {this.overview()}
        <DynamicBoxContainer children={this.props.children} campaign={this.props.campaign}/>
      </div>
    );
  }
}

export default Campaign;
