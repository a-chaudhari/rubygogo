import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CampaignReducer from './campaign_reducer';
import UserReducer from './user_reducer';
import ContributionReducer from './contribution_reducer';
import CategoryReducer from './category_reducer';
import PerkReducer from './perk_reducer';
import ErrorReducer from './error_reducer';
import FeatureReducer from './feature_reducer';

const rootReducer = combineReducers({
  errors: ErrorReducer,
  session: SessionReducer,
  campaign: CampaignReducer,
  users: UserReducer,
  contribution: ContributionReducer,
  category: CategoryReducer,
  perks: PerkReducer,
  features: FeatureReducer
});

export default rootReducer;
