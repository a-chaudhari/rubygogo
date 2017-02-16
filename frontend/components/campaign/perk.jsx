import React from 'react'

class Perk extends React.Component{
  constructor(props){
    super(props);
    this.state={
      hover: false
    };
  }

  onOver(){
    this.setState({hover: true});
  }

  onOut(){
    this.setState({hover:false});
  }



  render(){
    // debugger
    const p = this.props.perk
    const remaining = p.number_claimed + " out of " + p.total_number + " claimed"

    const eta = "estimated "+p.eta;
    let etaClass="perk-eta-selected";
    if(!this.state.hover){
      // eta="GET THIS PERK";
      etaClass += " perk-eta-hidden";
    }


    return(
      <div onMouseOver={this.onOver.bind(this)} onMouseOut={this.onOut.bind(this)} className='perkbox'>
        <ul>
          <li className="perk-price">${p.price}</li>
          <li className="perk-title">{p.title}</li>
          <li className="perk-desc">{p.description}</li>
          <li className="perk-rem">{remaining}</li>
        </ul>
        <div className="perk-eta">
          {eta}
          <div className={etaClass}>
            GET THIS PERK
          </div>
        </div>
      </div>
    );
  }
}

export default Perk;
