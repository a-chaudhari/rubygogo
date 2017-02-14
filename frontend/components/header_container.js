import { connect } from 'react-redux';
import Header from './header';
import { logIn, logOut } from '../actions/session_actions';
import {signUp} from '../actions/user_actions';

const mapStateToProps=(state)=>{
  return(
    {
      session: state.session
    }
  );
};

const mapDispatchToProps=(dispatch)=>{
  return(
    {
      logIn: info=>dispatch(logIn(info)),
      logOut: ()=>dispatch(logOut()),
      signUp: (user)=>dispatch(signUp())
    }
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
