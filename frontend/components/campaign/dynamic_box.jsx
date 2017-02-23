import React from 'react';
import Story from './story';
import Backers from './backers';
import Updates from './updates';
import Comments from './comments';

class DynamicBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode: 'story'
    };
    this.chMode = this.chMode.bind(this);
  }

  renderChild(){
    switch(this.state.mode){
      case 'story':
        return(<Story campaign={this.props.campaign}/>);

      case 'updates':
        return(<Updates create={this.props.createCampaignUpdate}
                        session={this.props.session}
                        campaign={this.props.campaign}
                        updates={this.props.campaign.updates}
                        fetchCampaignUpdates={this.props.fetchCampaignUpdates}/>);

      case 'backers':
        return(<Backers campaign={this.props.campaign} fetchCampaignBackers={this.props.fetchCampaignBackers}/>);

      case 'comments':
        return(<Comments createComment={this.props.createComment}
                          session={this.props.session}
                          campaign={this.props.campaign}
                          fetchComments={this.props.fetchComments}/>);

      default:
        return null;
    }
  }

  chMode(mode){
    return (e)=>{this.setState({mode:mode})};
  }

  render(){
    if(this.props.campaign.stats === undefined){
      return null;
    }
    const camp = this.props.campaign;
    const cname = "dynamic-selected";
    // debugger
    return(
      <div className="campaign-dynamicbox clearfix">
        <nav className="dynamicbox-navbar">
          <ul>
            <li onClick={this.chMode('story')} className={this.state.mode=="story" ? cname : ""}>STORY</li>
            <li onClick={this.chMode('updates')} className={this.state.mode=="updates" ? cname : ""}>UPDATES{camp.stats.updates > 0 ? (` (${camp.stats.updates})`): ""}</li>
            <li onClick={this.chMode('comments')} className={this.state.mode=="comments" ? cname : ""}>COMMENTS{camp.stats.comments > 0 ? (` (${camp.stats.comments})`): ""}</li>
            <li onClick={this.chMode('backers')} className={this.state.mode=="backers" ? cname : ""}>BACKERS{camp.contributors > 0 ? (` (${camp.contributors})`): ""}</li>
          </ul>
        </nav>
        {this.renderChild()}
      </div>
    );
  }
}

export default DynamicBox;
