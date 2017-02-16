import { RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state={},action)=>{
  switch(action.type){
    case RECEIVE_USER_ERRORS:
      // debugger
      return merge({},state,{errors:null},{errors:action.errors.responseJSON});

    case CLEAR_USER_ERRORS:
      // debugger
      return merge({},state,{errors:null},{errors:new Object});

    case RECEIVE_USER:
      return merge({},state,{user:action.user});

    default:
      return state;
  }
}

export default UserReducer;
window.merge = merge;
