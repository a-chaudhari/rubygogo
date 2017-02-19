import { connect  } from 'react-redux';
import DynamicBox from './dynamic_box';
import { fetchCampaign, fetchCampaignBackers, fetchCampaignUpdates, createCampaignUpdate } from '../../actions/campaign_actions';

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
      createCampaignUpdate: (id,body)=>dispatch(createCampaignUpdate(id,body))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicBox);
