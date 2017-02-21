import React from 'react';
import {withRouter} from 'react-router';

class CampaignTile extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(id){
    return (e)=>(this.props.router.push(`campaign/${id}`))
  }

  render(){
    const camp = this.props.campaign;
    return(
      <div onClick={this.handleClick(camp.id).bind(this)} className="campaign-tile">
        <div className="tile-image">
          <img src={camp.campaign_card_img_url}/>
        </div>
        <div className="tile-info">
          <div className="tile-category-line">{camp.alt_name}</div>
          <div className="tile-title-line">{camp.title}</div>
          <div className="tile-tagline">{camp.tagline}</div>
        </div>
        <div className="tile-lowerstats">
          <div className="tile-lowerstats-money"><strong>${camp.current_cash}</strong> {camp.currency}</div>
          <div className="tile-bar-background">
            <div style={{width: camp.percentDone+"%"}} className="tile-bar-foreground"></div>
          </div>
          <div className="clearfix">
            <span className="tile-percent">{camp.percentDoneReal}%</span>
            <span className="tile-daysleft">{camp.daysLeft} left</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CampaignTile);
