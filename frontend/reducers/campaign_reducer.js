import { RECEIVE_CAMPAIGN, RECEIVE_CAMPAIGNS } from '../actions/campaign_actions';

const CampaignReducer = (state={}, action) =>{
  console.log("inside reducer");
  switch(action.type){

    case RECEIVE_CAMPAIGN:
      console.log("received campaign");
      // debugger
      return action.campaign;

    default:
      return state;
  }
}

export default CampaignReducer;
