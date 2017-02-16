import { RECEIVE_CAMPAIGN, RECEIVE_CAMPAIGNS } from '../actions/campaign_actions';

const CampaignReducer = (state={}, action) =>{
  switch(action.type){

    case RECEIVE_CAMPAIGN:
      console.log("received campaign");
      // debugger
      return action.campaign;

    case RECEIVE_CAMPAIGNS:
      // debugger
      return action.campaigns;

    default:
      return state;
  }
}

export default CampaignReducer;
