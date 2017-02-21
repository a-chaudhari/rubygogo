import * as CategoryAPIUtils from '../util/category_api_utils';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const receiveCategory = category =>({
  type: RECEIVE_CATEGORY,
  category
});

export const fetchCategory = (id,filter,start) => dispatch => (
  CategoryAPIUtils.fetchCategory(id,filter,start).then(res=>dispatch(receiveCategory(res)))
);

export const fetchCategories = () => dispatch => (
  CategoryAPIUtils.getAllCats().then(categories=>dispatch(receiveCategories(categories)))
);
