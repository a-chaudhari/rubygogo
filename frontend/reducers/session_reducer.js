import { RECEIVE_LOGIN, SIGN_OUT, RECEIVE_ERRORS } from '../actions/session_actions';
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

    default:
      return state;
  }
}

export default SessionReducer;
