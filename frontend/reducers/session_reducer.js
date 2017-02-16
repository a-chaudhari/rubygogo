import { RECEIVE_LOGIN, SIGN_OUT, RECEIVE_ERRORS, UPDATE_NAME } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state={errors:[]},action)=>{
  switch(action.type){
    case RECEIVE_LOGIN:
      return merge({},state,action.session);

    case SIGN_OUT:
      return {};

    case RECEIVE_ERRORS:
      // debugger
      return merge({},state,action.errors.responseJSON)

    case UPDATE_NAME:
      return merge({},state,{firstName: action.firstName, lastName: action.lastName});

    default:
      return state;
  }
}

export default SessionReducer;
