import React from 'react'
import TopChunk from './top_chunk';
import DynamicBox from './dynamic_box';
import PerksBox from './perks_box';

class Campaign extends React.Component{
  constructor(props){
    super(props);
    // debugger
  }

  componentDidMount(){
    console.log("did mount");
    this.props.fetchCampaign(this.props.routeParams.id);
  }

  overview(){
    const camp = this.props.campaign;

    return(
      <div className="campaign-overview">
        <div className="overview-title">
          <h3>OVERVIEW</h3>
        </div>
        <img src={camp.overview_img_url}/>
        <div>
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
        {this.overview()}
        <PerksBox id={this.props.campaign.id}/>
        <DynamicBox children={this.props.children} campaign={this.props.campaign}/>
      </div>
    );
  }
}

export default Campaign;
