import { connect } from 'react-redux';
import Header from './header';
import { logIn, logOut } from '../actions/session_actions';
import {signUp, clearUserErrors} from '../actions/user_actions';

const mapStateToProps=(state)=>{
  return(
    {
      session: state.session,
      user: state.users
    }
  );
};

const mapDispatchToProps=(dispatch)=>{
  return(
    {
      logIn: info=>dispatch(logIn(info)),
      logOut: ()=>dispatch(logOut()),
      signUp: (user)=>dispatch(signUp(user)),
      clear: ()=>dispatch(clearUserErrors())
    }
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
