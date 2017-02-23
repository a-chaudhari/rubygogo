import { connect  } from 'react-redux';
import Editor from './editor';
import {fetchEditor, updateCampaign, clearCampaignErrors} from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      editor: state.campaign.editor,
      errors: state.campaign.errors
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchEditor: id=>dispatch(fetchEditor(id)),
      updateCampaign: campaign=>dispatch(updateCampaign(campaign)),
      clearCampaignErrors: ()=>dispatch(clearCampaignErrors)
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
