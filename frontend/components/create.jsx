import React from 'react';
import {withRouter} from 'react-router';

class Create extends React.Component{
  constructor(props){
    super(props);
    this.state={
      goal_amount: 500,
      title: "",
      currency: "USD"
    };
    this.update=this.update.bind(this);
  }

  update(field){
    return (e)=>(this.setState({[field]:e.target.value}))
  }

  submitForm(e){
    console.log("in submit form")
    e.preventDefault();
    this.props.createCampaign(this.state).then(res=>(this.props.router.push(`/editor/${res.editor.id}`)))
  }

  validator(){
    // debugger
    if(this.state.goal_amount < 500) return false;
    // if(this.)

    return true;
  }

  render(){

    const active = this.validator();
    // const active = false;


    return(
      <div className="start-campaign-lobby">
        <h1 className="start-campaign-title">Start a campaign</h1>
        <h3 className="start-campaign-subtitle">Raise funds for creative, entrepreneurial, or other passion projects.</h3>
        <form onSubmit={this.submitForm.bind(this)}>
          <label>How much money would you like to raise?
            <input type="number" value={this.state.goal_amount} onChange={this.update('goal_amount')}/>
            <span>Minimum 500 Dollars</span>
          </label>
          <label>What is the title of your Campaign?
            <input maxLength="50" placeholder="My campaign title..." value={this.state.title} onChange={this.update('title')}/>
            <span>50 Characters Maximum</span>
          </label>
          <button disabled={!active} className={"newcampaign-create-button" + (active? "" : " disabled-button")}>Create My Campaign</button>
        </form>
      </div>
    );
  }
}


import { connect  } from 'react-redux';
import { createCampaign } from '../actions/campaign_actions';
import { clearErrors} from '../actions/error_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      errors: state.errors.create
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      createCampaign: camp=>dispatch(createCampaign(camp)),
      clearErrors: ()=>dispatch(clearErrors('create'))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Create));
