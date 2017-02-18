import { connect  } from 'react-redux';
import Profile from './profile';
import {fetchUser, updateUser} from '../../actions/user_actions';
import {receiveLogin} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      user: state.users.user
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchUser: id=>dispatch(fetchUser(id)),
      updateUser: user=>dispatch(updateUser(user)),
      receiveLogin: session=>dispatch(receiveLogin(session))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
