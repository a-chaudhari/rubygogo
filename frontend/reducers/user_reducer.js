import { RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS, RECEIVE_USER, RECEIVE_CONTRIBUTIONS, RECEIVE_CAMPAIGNS } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state={contributions: [], campaigns:{created:[], contributed:[]}},action)=>{
  switch(action.type){
    case RECEIVE_USER_ERRORS:
      return merge({},state,{errors:null},{errors:action.errors.responseJSON});

    case CLEAR_USER_ERRORS:
      return merge({},state,{errors:null},{errors:new Object});

    case RECEIVE_USER:
      return merge({},state,{user:action.user});

    case RECEIVE_CONTRIBUTIONS:
      return merge({},state, {contributions:action.contributions});

    case RECEIVE_CAMPAIGNS:
      return merge({},state, {campaigns:null},{campaigns:action.campaigns});

    default:
      return state;
  }
}

export default UserReducer;
window.merge = merge;
