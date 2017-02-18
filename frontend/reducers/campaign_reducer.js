import { RECEIVE_CAMPAIGN, RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN_BACKERS } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const CampaignReducer = (state={}, action) =>{
  switch(action.type){

    case RECEIVE_CAMPAIGN:
      console.log("received campaign");
      // debugger
      return action.campaign;

    case RECEIVE_CAMPAIGNS:
      // debugger
      return action.campaigns;

    case RECEIVE_CAMPAIGN_BACKERS:
      return merge({}, state, {backers: action.backers})

    default:
      return state;
  }
}

export default CampaignReducer;
