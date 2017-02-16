import React from 'react'
import { fetchAllCampaigns } from '../actions/campaign_actions';
import {Link } from 'react-router';

class Debug extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllCampaigns();
  }

  campaignList(){
    // debugger
    if( this.props.campaigns.constructor  !== Array){
      return(null)
    }
    return this.props.campaigns.map(camp=>{
      return (
      <li key={camp.id}>
        <Link  to={`/campaign/${camp.id}`}>{camp.title}</Link>
      </li>
    )})
  }


  render(){
    return(
      <div className="debug">
        <h1>Debug Window!</h1>
        <div>
          <h2>All campaigns:</h2>
          <ul>

            {this.campaignList()}
          </ul>
        </div>
      </div>
    );
  }
}


import { connect  } from 'react-redux';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      campaigns: state.campaign
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchAllCampaigns: ()=>dispatch(fetchAllCampaigns())
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Debug);
