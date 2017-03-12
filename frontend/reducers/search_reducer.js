import {RECEIVE_SEARCH} from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {results:[], more:false, timestamp:0}, action) => {
  switch(action.type){

    case RECEIVE_SEARCH:
      return {timestamp: (new Date).getTime(),
              results: action.results.slice(0,12),
              more:(action.results.length === 13)};

    default:
      return state;
  }
}

export default SearchReducer;
