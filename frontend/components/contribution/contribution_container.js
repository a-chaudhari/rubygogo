import { connect  } from 'react-redux';
import Contribution from './contribution';
import {createContribution} from '../../actions/contribution_actions';
import {fetchCampaign} from '../../actions/campaign_actions';
import {logOut} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      contribution: state.contribution,
      campaign: state.campaign,
      session: state.session
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      createContribution: (contribution)=>dispatch(createContribution(contribution)),
      fetchCampaign: (id)=>dispatch(fetchCampaign(id)),
      logOut: ()=>dispatch(logOut())
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contribution);
