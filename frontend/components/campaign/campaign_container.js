import { connect  } from 'react-redux';
import Campaign from './campaign';
import { fetchCampaign } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      campaign: state.campaign,
      alt_cid: ownProps.alt_cid
    }
  );
};

const mapDispatchToProps = (dispatch) =>{
  return(
    {
      fetchCampaign: id=>dispatch(fetchCampaign(id)),
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaign);
