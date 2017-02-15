import React from 'react'
import Creator from './creator';

class TopChunk extends React.Component{
  constructor(props){
    super(props);
  }

  numberWithCommas(x) {
    // debugger
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

    console.log(percentDone);


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
            <li>{camp.daysLeft} days left</li>
          </ul>
          <div className="campaign-backit-button">BACK IT</div>
        </div>
      </div>
    );
  }
}

export default TopChunk;
