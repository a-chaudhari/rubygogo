import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const SIGN_OUT = 'SIGN_OUT';

export const receiveLogin = (info)=>({
  type: RECEIVE_LOGIN,
  session: info
});

export const signOut = () =>({
  type: SIGN_OUT
})

export const logIn= info=> dispatch =>(
  SessionAPIUtil.signIn(info).then(ret=>dispatch(receiveLogin(ret)))
);

export const logOut= () => dispatch=>(
  SessionAPIUtil.signOut().then(ret=>dispatch(signOut()))
);

window.signIn = logIn;
window.signOut = logOut;
