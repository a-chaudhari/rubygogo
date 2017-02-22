import {RECEIVE_CONTRIBUTION, RECEIVE_CONTRIBUTION_ERRORS} from '../actions/contribution_actions';
import merge from 'lodash/merge';

const ContributionReducer=(state={errors:{}},action)=>{
  switch(action.type){
    case RECEIVE_CONTRIBUTION:
      return merge({},state,action.contribution);

    case RECEIVE_CONTRIBUTION_ERRORS:
    // debugger
      return merge({},state,{errors:action.errors.responseJSON});

    default:
      return state;
  }
}

export default ContributionReducer;
