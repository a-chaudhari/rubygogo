import * as FeaturesAPIUtil from '../util/features_api_util';


export const RECEIVE_TOP_FIVE = 'RECEIVE_TOP_FIVE';
export const RECEIVE_SLIDER = 'RECEIVE_SLIDER';

export const receiveSlider = (category) => ({
  type: RECEIVE_SLIDER,
  category
});

export const receiveTopFive = (topfive) => ({
  type: RECEIVE_TOP_FIVE,
  topfive
});

export const fetchTopFive = () => dispatch => (
  FeaturesAPIUtil.fetchTopFive().then(topfive => dispatch(receiveTopFive(topfive)))
);

export const fetchCategory = (data) => dispatch => (
  FeaturesAPIUtil.fetchCategory(data).then(category=> dispatch(receiveSlider(category)))
);
