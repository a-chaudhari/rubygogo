import React from 'react'
import {withRouter} from 'react-router';

class Contribution extends React.Component{
  constructor(props){
    super(props);
    this.withPerk= (this.props.location.state.perk_id !== undefined);
    this.state={
      visibility: "public",
      other_name: '',
      amount: 1
      // remember_cc: false
    };
    this.update = this.update.bind(this);
    this.updateRadio = this.updateRadio.bind(this);
  }

  componentDidMount(){
    // debugger
    this.props.fetchCampaign(this.props.location.state.campaign_id)
  }

  logOut(){
    this.props.logOut().then(()=>(this.props.router.push('/')))
  }

  update(field){
    return (e)=>(this.setState({[field]:e.target.value}));
  }

  updateRadio(value){
    return (e)=>(this.setState({visibility:value}))
  }

  submit(e){
    e.preventDefault();
    const perk_id = this.props.location.state.perk_id
    let contribution = {
      campaign_id: this.props.campaign.id,
      amount: this.state.amount,
      visibility: this.state.visibility,
      other_name: this.state.other_name
    };
    if(perk_id !== undefined){
      const perk = this.getPerk(this.props.location.state.perk_id)
      contribution['perk_id']= perk.id;
      contribution['amount'] = perk.price;
    }
    this.props.createContribution(contribution).then(
      res=> (this.props.router.push(`campaign/${contribution.campaign_id}`))
      ,console.log);

  }

  circle(selected){
    let cname= "custom-circle"
    if(selected){
      cname += " custom-circle-selected"
    }
    return(
      <div className="circle-container">
        <div className={cname}></div>
      </div>
    );
  }

  getPerk(target, props = this.props){
    // debugger
    const perks = props.campaign.perks;
    const len = perks.length;
    for(let i =0;i<perks.length;i++){
      if(target == perks[i].id) return perks[i];
    }
  }

  componentWillReceiveProps(newProps){
    // console.log
    const perk_id = newProps.location.state.perk_id
    if(perk_id !== undefined){
      // debugger
      const perk = this.getPerk(newProps.location.state.perk_id,newProps)
      this.setState({amount:perk.price})
    }
  }

  perkSection(){
    // debugger
    if(this.props.location.state.perk_id === undefined){
      // debugger
      return(
        <div className="perk-none">
          <div className="perk-hint">Your Contribution <a>Add Perk</a></div>
          <div className="input-container">

            <div className="input-overlay"><span>$</span><span>{this.props.campaign.currency}</span></div>
            <input className="perk-amount-input" value={this.state.amount} onChange={this.update('amount')}/>
          </div>

          <span>{this.props.contribution.errors.amount}</span>
        </div>
      );
    }
    else{
      // debugger
      const perk = this.getPerk(this.props.location.state.perk_id);
      // debugger

      return(
        <div className="perk-section">
          <h3>Your Perk</h3>
          <h4>{perk.title}</h4>
          <h3>Items Included</h3>
          <h4>{perk.description}</h4>
        </div>
      )
    }
  }

  reviewSection(){
    let item="Your Contribution";
    if(this.withPerk){
      const perk = this.getPerk(this.props.location.state.perk_id);
      item = perk.title;
    }
    // const item = (this.withPerk ? perkName : "Your Contribution");
    return(
      <div className="total-section">
        <h2>Review & Pay</h2>
        <div className="total-line">
          <h3>{item}</h3>
          <h3>${this.state.amount} {this.props.campaign.currency}</h3>
        </div>
        <div>
          <h2>Total</h2> <h2>${this.state.amount} {this.props.campaign.currency}</h2>
        </div>
      </div>
    );

  }

  render(){
    if(this.props.campaign.id === undefined){
      return null;
    }
    const camp = this.props.campaign;
    const self = this.props.session;
    let othercname = "otherField"
    if(this.state.visibility !== 'other' && this.state.other_name === ''){
      othercname += " otherhidden";
    }

    return(
      <div className='contribution'>
        <div className='contribution-left'>
          <h3>{"You're contributing to"} {camp.creator.firstName} {camp.creator.lastName}{"'s"}</h3>
          <h1>{camp.title}</h1>
          <div className="contribution-self">
            <div className="self-image"><img src={self.avatar_img_url}/></div>
            <div>
              <ul>
                <li>{self.firstName} {self.lastName}</li>
                <li>{self.email}</li>
                <li>Not you? <a onClick={this.logOut.bind(this)}>Log Out</a></li>
              </ul>
            </div>
          </div>

          <form className="contribution-form">
            <h3>Credit Card</h3>
            <h4>(For display purposes only. Fields are disabled.)</h4>
            <div className="contribution-ccbox">
              <div>
                <input disabled={true}  placeholder="Name on Card"/>
                <input disabled={true}  placeholder="Credit Card Number"/>

              </div>
              <div>
                <input disabled={true} placeholder={"Expiration Date (MM/YY)"} />
                <input disabled={true} placeholder={"Security Code"}/>
                <input disabled={true} placeholder={"Billing Postal Code"}/>

              </div>
            </div>
            <div className="contribution-visibility">
              <h3>Contribution Appearance</h3>
              <h4>Choose a name to be displayed pubicaly next to your contribution on the campaign page.</h4>
              <div className="contribution-visibility-list">
                <div className={this.state.visibility==='public'? "list-element list-element-selected":"list-element" } onClick={this.updateRadio('public')}>
                  {this.circle(this.state.visibility==='public')}
                  <h4>{self.firstName + " " + self.lastName}</h4>
                </div>
                <div className={this.state.visibility==='anonymous'? "list-element list-element-selected":"list-element" } onClick={this.updateRadio('anonymous')}>
                  {this.circle(this.state.visibility==='anonymous')}
                  <h4>Anonymous</h4>
                </div>
                <div className={this.state.visibility==='other'? "list-element otherBox list-element-selected":"list-element otherBox" } onClick={this.updateRadio('other')}>
                  {this.circle(this.state.visibility==='other')}
                  <div className="inner-div">
                    <h4>Other</h4>
                    <input className={othercname} onChange={this.update('other_name')} value={this.state.other_name} placeholder="Other"/>
                  </div>
                </div>
                <span>{this.props.contribution.errors.other_name}</span>
              </div>
            </div>
          </form>
        </div>
        <div className="contribution-right">
          <div className="contribution-summary">
            <div className="contribution-perk">

              {this.perkSection()}
            </div>
            <div className="contribution-review">
              {this.reviewSection()}
              <h4>By clicking 'Submit Payment', you acknowledge you are contributing to absolutely nothing and not making a direct purchase. Perks are managed by noone as they are procedurly generated and cannot actually be shipped by Rubygogo. You also acknowledge and agree to our Terms of Use and Privacy Policy. Which don't exist so that's also a moot point.</h4>
              <div onClick={this.submit.bind(this)} className="contribution-submit">
                Submit Payment
              </div>
              <span>{this.props.contribution.errors.login}</span>
              <span>{this.props.contribution.errors.perkquant}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Contribution);
