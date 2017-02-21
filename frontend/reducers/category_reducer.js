import {RECEIVE_CATEGORY, RECEIVE_CATEGORIES} from '../actions/category_actions';
import merge from 'lodash/merge';

const CategoryReducer = (state={results:{},categories:[]},action) =>{

  switch(action.type){
    case RECEIVE_CATEGORY:
      return merge({},state, {results:null},{results:action.category});


    case RECEIVE_CATEGORIES:
      // debugger
      return merge({},state,{categories:null},{categories:action.categories});

    default:
      return state;
  }

}

export default CategoryReducer;
