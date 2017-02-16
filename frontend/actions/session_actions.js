import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const SIGN_OUT = 'SIGN_OUT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const UPDATE_NAME = 'UPDATE_NAME';

export const updateName = (firstName,lastName) =>({
  type: UPDATE_NAME,
  firstName,
  lastName
});

export const receiveLogin = (info)=>({
  type: RECEIVE_LOGIN,
  session: info
});

export const signOut = () =>({
  type: SIGN_OUT
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const logIn= info=> dispatch =>(
  SessionAPIUtil.signIn(info).then(
    ret=>dispatch(receiveLogin(ret)),
    errs=>dispatch(receiveErrors(errs))
  )
);

export const logOut= () => dispatch=>(
  SessionAPIUtil.signOut().then(ret=>dispatch(signOut()))
);
