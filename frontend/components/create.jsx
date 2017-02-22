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
    e.preventDefault();
    this.props.createCampaign(this.state).then(res=>(this.props.router.push(`/editor/${res.editor.id}`)))
  }

  render(){
    return(
      <div className="start-campaign-lobby">
        <h1 className="start-campaign-title">Start a campaign</h1>
        <h3 className="start-campaign-subtitle">Raise funds for creative, entrepreneurial, or other passion projects.</h3>
        <form onSubmit={this.submitForm.bind(this)}>
          <label>How much money would you like to raise?
            <input value={this.state.goal_amount} onChange={this.update('goal_amount')}/>
          </label>
          <label>What is the title of your Campaign?
            <input placeholder="My campaign title..." value={this.state.title} onChange={this.update('title')}/>
          </label>
          <button className="newcampaign-create-button">Create My Campaign</button>
        </form>
      </div>
    );
  }
}


import { connect  } from 'react-redux';
import { createCampaign } from '../actions/campaign_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {

    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      createCampaign: camp=>dispatch(createCampaign(camp))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Create));
