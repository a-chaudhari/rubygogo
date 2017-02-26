import React from 'react'

class ProfileDetails extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.params.profile_id);
  }

  render(){
    if(this.props.user === undefined){
      return(null);
    }
    const u = this.props.user;
    return(
      <div className="profile-profiledetails">
        <div className="profile-profiledetails-left">
          <img src={u.profile_img_url}/>
          <h1>{u.short_desc}</h1>
          <p>{u.about_me}</p>
        </div>
        <div className="profile-profiledetails-right">
          <div className="profile-aboutme">
            <div className="avatar-box">
              <div className="img-box">
                <img src={u.avatar_img_url}/>
              </div>
              <h2>About Me</h2>

            </div>
            <ul>
              <li><span><strong>{u.stats.campaigns} </strong></span><span>Campaigns</span></li>
              <li><span><strong>{u.stats.comments} </strong></span><span>Comments</span></li>
              <li><span><strong>{u.stats.contributions} </strong></span><span>Contributions</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

import { connect  } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

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
      fetchUser: id=>dispatch(fetchUser(id))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetails);
