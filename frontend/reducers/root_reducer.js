import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CampaignReducer from './campaign_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  campaign: CampaignReducer,
  users: UserReducer
});

export default rootReducer;
