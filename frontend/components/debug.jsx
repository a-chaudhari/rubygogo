import React from 'react'
import { fetchAllCampaigns } from '../actions/campaign_actions';
import {Link } from 'react-router';

class Debug extends React.Component{
  constructor(props){
    super(props);
    this.state={
      url:"nope"
    };
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
  updateUrl(errs,out){
    debugger
    this.setState({url:(out[0].url)});
  }
  open(){
    // cloudinary.openUploadWidget(window.cloudinary_options,(errs,out)=>{
    //   this.updateUrl(errs,out)
    // })
    cloudinary.applyUploadWidget(document.getElementById('opener'),window.cloudinary_options,(errs,out)=>{
      this.updateUrl(errs,out)
    })
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
          {this.state.url}
          <button onClick={this.open.bind(this)}>open</button>
          <button id="opener"></button>
          <div id="widget" width="500px" height="500px"></div>
          // <img src={this.state.url}/>

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
