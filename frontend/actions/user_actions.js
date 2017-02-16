import * as UserAPIUtil from '../util/user_api_util';
import { receiveLogin } from './session_actions';

export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user =>({
  type: RECEIVE_USER,
  user
});

export const clearUserErrors = ()=> ({
  type: CLEAR_USER_ERRORS
});

export const receiveUserErrors = errors =>({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const signUp=user=> dispatch=>(
  UserAPIUtil.createUser(user).then(
    session=>dispatch(receiveLogin(session)),
    errors=>dispatch(receiveUserErrors(errors))
  )
);

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id).then(
    user=>dispatch(receiveUser(user))
  )
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user).then(
    user=>dispatch(receiveUser(user))
  )
);

window.fetchUser = fetchUser;
window.updateUser = updateUser;
