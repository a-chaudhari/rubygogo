import React from 'react'
import Creator from './creator';
import {withRouter} from 'react-router';

class TopChunk extends React.Component{
  constructor(props){
    super(props);
  }

  numberWithCommas(x) {
    // debugger
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  donate(pid=null){
    this.props.router.push({pathname:'/contribute', state: {'campaign_id': this.props.campaign.id, 'perk_id': undefined}});
  }

  render(){
    const camp = this.props.campaign
    // debugger
    if(camp.id === undefined){
      return(null)
    }
    // debugger
    let percentDone = '100%'

    if(camp.percentDone<100){
      percentDone=camp.percentDone+"%";
    }


    return(
      <div className="campaign-TopChunk">
        <img src={camp.main_img_url}/>
        <div className="campaign-TopChunk-right">
          <h1>{camp.title}</h1>
          <h2>{camp.tagline}</h2>
          <Creator creator={camp.creator}/>
          <ul className="statusArea">
            <li><strong>${this.numberWithCommas(camp.current_cash)} {camp.currency}</strong> raised by {camp.contributors} backers.</li>
            <li>
              <div className="campaign-bar-background">
                <div style={{width:percentDone}} className="campaign-bar-foreground"></div>
              </div>
            </li>
            <li>{camp.percentDone}% of ${this.numberWithCommas(camp.goal_amount)} {camp.funding_type} goal</li>
            <li>{camp.daysLeft} left</li>
          </ul>
          <a><div onClick={this.donate.bind(this)} className="campaign-backit-button">BACK IT</div></a>
        </div>
      </div>
    );
  }
}

export default withRouter(TopChunk);
