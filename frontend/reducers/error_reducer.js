import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';
import merge from 'lodash/merge'

const ErrorReducer = (state={},action) =>{
  switch(action.type){
    case RECEIVE_ERRORS:
      return merge({},state,{[action.tag]:null},{[action.tag]:action.errors});

    case CLEAR_ERRORS:
      let stateCopy = merge({},state);
      delete stateCopy[action.tag]
      return stateCopy;

    default:
      return state;
  }
}

export default ErrorReducer;
