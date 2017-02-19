import { connect  } from 'react-redux';
import DynamicBox from './dynamic_box';
import { fetchCampaign, fetchCampaignBackers, fetchCampaignUpdates, createCampaignUpdate, fetchComments, createComment } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) =>{
  // debugger
  return(
    {
      campaign: state.campaign,
      session: state.session
    }
  );
};

const mapDispatchToProps = (dispatch) =>{
  return(
    {
      fetchCampaign: id=>dispatch(fetchCampaign(id)),
      fetchCampaignBackers: (id,start)=>dispatch(fetchCampaignBackers(id,start)),
      fetchCampaignUpdates: id=>dispatch(fetchCampaignUpdates(id)),
      createCampaignUpdate: (id,body)=>dispatch(createCampaignUpdate(id,body)),
      fetchComments: (id,start)=>dispatch(fetchComments(id,start)),
      createComment: (id,body) => dispatch(createComment(id,body))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicBox);
