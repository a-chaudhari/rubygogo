import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = (results) => ({
  type: RECEIVE_SEARCH,
  results
});

export const sendSearch = (query, offset=0)=> dispatch => (
  SearchAPIUtil.sendSearch(query,offset).then(
    ret=>dispatch(receiveSearch(ret))
  )
);
