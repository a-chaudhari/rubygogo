import React from 'react'
import Perk from './perk';

class PerksBox extends React.Component{
  constructor(props){
    super(props);
  }

  perks(){
    return this.props.perks.map((perk,idx)=>(
      <Perk key={idx} perk={perk}/>
    ))
  }

  render(){
    if(this.props.perks === undefined){
      return null;
    }
    return(
      <div className="campaign-perks-box">
        <div className="perks-header">
          <h3>PERKS</h3>
        </div>
        {this.perks()}
      </div>
    );
  }
}

export default PerksBox;
