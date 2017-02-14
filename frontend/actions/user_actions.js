import * as UserAPIUtil from '../util/user_api_util';
import { receiveLogin } from './session_actions';

export const signUp=user=> dispatch=>(
  UserAPIUtil.createUser(user).then(session=>dispatch(receiveLogin(session)))
);
