import { RECEIVE_CAMPAIGN, RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN_BACKERS, RECEIVE_UPDATES, RECEIVE_UPDATE, RECEIVE_COMMENTS, RECEIVE_COMMENT } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const CampaignReducer = (state={updates:[], comments:[]}, action) =>{
  switch(action.type){

    case RECEIVE_CAMPAIGN:
      console.log("received campaign");
      // debugger
      return merge({},state,action.campaign);

    case RECEIVE_CAMPAIGNS:
      // debugger
      return action.campaigns;

    case RECEIVE_CAMPAIGN_BACKERS:
    // debugger
      return merge({}, state, {backers:null},{backers: action.backers})

    case RECEIVE_UPDATES:
      // debugger
      return merge({}, state,{updates: action.updates})

    case RECEIVE_UPDATE:
      console.log("receve update in reducer")
      let stateCopy = merge({},state);
      stateCopy.updates.unshift(action.update);
      return stateCopy;

    case RECEIVE_COMMENTS:
      // debugger
      return merge({},state,{comments:null},{comments: action.comments})

    case RECEIVE_COMMENT:
      let stateCopyTwo = merge({},state);
      // if(state)
      //does not take into account new child comments!
      stateCopyTwo.comments.unshift(action.comment);
      return stateCopyTwo;

    default:
      return state;
  }
}

export default CampaignReducer;
