import { connect  } from 'react-redux';
import Editor from './editor';
import {fetchEditor, updateCampaign} from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      editor: state.campaign.editor
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchEditor: id=>dispatch(fetchEditor(id)),
      updateCampaign: campaign=>dispatch(updateCampaign(campaign))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
