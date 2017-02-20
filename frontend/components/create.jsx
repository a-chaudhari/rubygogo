import React from 'react'

class Create extends React.Component{
  constructor(props){
    super(props);
    this.state={
      goal_amount: 500,
      title: "test",
      currency: "USD"
    };
    this.update=this.update.bind(this);
  }

  update(field){
    return (e)=>(this.setState({[field]:e.target.value}))
  }

  submitForm(e){
    e.preventDefault();
    this.props.createCampaign(this.state).then(console.log,console.log)
  }

  render(){
    return(
      <div className="start-campaign-lobby">
        <h1>Start a campaign</h1>
        <form onSubmit={this.submitForm.bind(this)}>
          <input placeholder="amount seeking" value={this.state.goal_amount} onChange={this.update('goal_amount')}/>
          <input placeholder="title" value={this.state.title} onChange={this.update('title')}/>
          <button>Submit</button>
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
)(Create);
