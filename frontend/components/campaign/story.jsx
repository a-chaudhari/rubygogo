import React from 'react'

class Story extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    // this.props.fetchCampaignMeta('story',this.props.params.id);
    this.props.fetchCampaign(this.props.params.id);
  }

  render(){
    if(this.props.campaign.id === undefined){
      return null;
    }
    const camp = this.props.campaign;

    return(
      <p>{camp.pitch_text}</p>
    );
  }
}



import { connect  } from 'react-redux';
import {fetchCampaign } from '../../actions/campaign_actions';
const mapStateToProps = (state, ownProps) =>{
  return(
    {
      campaign: state.campaign
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchCampaign: (camp)=>dispatch(fetchCampaign(camp))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
