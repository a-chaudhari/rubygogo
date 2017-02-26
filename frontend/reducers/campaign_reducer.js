import { RECEIVE_CAMPAIGN, RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN_BACKERS,
  RECEIVE_UPDATES, RECEIVE_UPDATE, RECEIVE_COMMENTS, RECEIVE_COMMENT,
  RECEIVE_EDITOR, RECEIVE_CAMPAIGN_ERRORS, CLEAR_CAMPAIGN_ERRORS } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const CampaignReducer = (state={editor: {}, updates:[], comments:[], errors:{}}, action) =>{
  switch(action.type){

    case RECEIVE_CAMPAIGN:
      return merge({},state,action.campaign);

    case RECEIVE_CAMPAIGNS:
      return action.campaigns;

    case RECEIVE_CAMPAIGN_BACKERS:
      return merge({}, state, {backers:null},{backers: action.backers})

    case RECEIVE_UPDATES:
      return merge({}, state,{updates: action.updates})

    case RECEIVE_UPDATE:
      let stateCopy = merge({},state);
      stateCopy.updates.unshift(action.update);
      return stateCopy;

    case RECEIVE_COMMENTS:
      return merge({},state,{comments:null},{comments: action.comments});

    case RECEIVE_EDITOR:
      return merge({},state,{editor: null},{editor: action.editor});

    case RECEIVE_COMMENT:
      let stateCopyTwo = merge({},state,{comments:null},{comments:[]});
      return stateCopyTwo;

    case RECEIVE_CAMPAIGN_ERRORS:
      return merge({},state,{errors:null},{errors:action.errors})

    case CLEAR_CAMPAIGN_ERRORS:
      return merge({},state,{errors:null},{errors:{}})

    default:
      return state;
  }
}

export default CampaignReducer;
