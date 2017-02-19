import { RECEIVE_CAMPAIGN, RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN_BACKERS, RECEIVE_UPDATES, RECEIVE_UPDATE } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const CampaignReducer = (state={updates:[]}, action) =>{
  switch(action.type){

    case RECEIVE_CAMPAIGN:
      console.log("received campaign");
      // debugger
      return action.campaign;

    case RECEIVE_CAMPAIGNS:
      // debugger
      return action.campaigns;

    case RECEIVE_CAMPAIGN_BACKERS:
    // debugger
      return merge({}, state, {backers: action.backers})

    case RECEIVE_UPDATES:
      // debugger
      return merge({}, state, {updates: action.updates})

    case RECEIVE_UPDATE:
      console.log("receve update in reducer")
      let stateCopy = merge({},state);
      stateCopy.updates.unshift(action.update);
      return stateCopy;

    default:
      return state;
  }
}

export default CampaignReducer;
