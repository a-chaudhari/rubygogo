import { connect  } from 'react-redux';
import Campaign from './campaign';
import { fetchCampaign } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) =>{
  // debugger
  return(
    {
      campaign: state.campaign
    }
  );
};

const mapDispatchToProps = (dispatch) =>{
  return(
    {
      fetchCampaign: id=>dispatch(fetchCampaign(id))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaign);
