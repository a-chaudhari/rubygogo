import {RECEIVE_TOP_FIVE, RECEIVE_SLIDER} from '../actions/feature_actions';
import merge from 'lodash/merge';

const FeatureReducer = (state = {topfive:[], category:[]}, action)=>{
  switch(action.type){
    case RECEIVE_SLIDER:
      return merge({},state,{category:action.category});

    case RECEIVE_TOP_FIVE:
      return merge({},state,{topfive:action.topfive});

    default:
      return state;
  }
}

export default FeatureReducer;
