import React from 'react';
import {withRouter, Link} from 'react-router';

 class UserMenu extends React.Component{
 	  constructor(props){
 	    super(props);
      this.link = this.link.bind(this);
 	  }

    link(path){
      return (e) =>
    {  this.props.toggle()
      this.props.router.push(path)}
    }

 	  render(){
      let cname = "header-loggedin-popout" + (this.props.show ? "" : " header-hide")
 	    return(
        <div className={cname}>
          <ul>
            <li>My Campaigns</li>
            <li>My Contributions</li>
            <li onClick={this.link(`/profile/${this.props.userId}`)}>My Profile</li>
            <li onClick={this.link(`/profile/${this.props.userId}/?edit`)}>My Settings</li>
            <li onClick={this.props.logOut}>Log Out</li>
          </ul>
        </div>
 	    );
 	  }
 }

 export default withRouter(UserMenu);
