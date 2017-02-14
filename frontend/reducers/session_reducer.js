import { RECEIVE_LOGIN, SIGN_OUT } from '../actions/session_actions';

const SessionReducer = (state={},action)=>{
  switch(action.type){
    case RECEIVE_LOGIN:
      return action.session

    case SIGN_OUT:
      return {};

    default:
      return state;
  }
}

export default SessionReducer;
