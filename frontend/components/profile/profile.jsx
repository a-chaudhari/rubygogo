import React from 'react'

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode: 'profile'
    };
  }

  componentDidMount(){
    this.props.fetchUser(this.props.params.profile_id)
  }

  render(){
    // debugger
    if(this.props.user===undefined){
      return null;
    }
    const u  = this.props.user;
    // debugger
    let header = ""
    if(!u.public){
      header = (<header className="profile-editHeader">
        <button>View Profile</button>
        <button>Edit Profile & Settings</button>
      </header>)
    }

    const fullName = u.firstName + " " + u.lastName;


    return(
      <div className="profile">
        {header}
        <h1>{fullName}</h1>
        <ul className="profile-dynamicbox-menu">
          <li>Profile</li>
          <li>Campaigns</li>
          <li>Activity</li>
          <li>Contributions</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
