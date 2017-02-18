import { connect  } from 'react-redux';
import DynamicBox from './dynamic_box';
import { fetchCampaign, fetchCampaignBackers } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) =>{
  // debugger
  return(
    {
      campaign: ownProps.campaign,
      children: ownProps.children
    }
  );
};

const mapDispatchToProps = (dispatch) =>{
  return(
    {
      fetchCampaign: id=>dispatch(fetchCampaign(id)),
      fetchCampaignBackers: (id,start)=>dispatch(fetchCampaignBackers(id,start))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicBox);
