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
            <div className="img-box">
              <img src={u.avatar_img_url}/>
              <h2>About Me</h2>
            </div>
            <ul>
              <li><strong>-1</strong> Campaigns</li>
              <li><strong>-1</strong> Comments</li>
              <li><strong>-1</strong> Contributions</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


import { connect  } from 'react-redux';


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
