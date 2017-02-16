import React from 'react';
import {Link} from 'react-router';

 class UserMenu extends React.Component{
 	  constructor(props){
 	    super(props);
 	  }
    testClick(e){
      console.log(e.target);
    }

 	  render(){
      let cname = "header-loggedin-popout" + (this.props.show ? "" : " header-hide")
 	    return(
        <div onClick={this.testClick.bind(this)} className={cname}>
          <ul>
            <li>My Campaigns</li>
            <li>My Contributions</li>
            <li><Link to={`/profile/${this.props.userId}`}>My Profile</Link></li>
            <li><Link to={`/profile/${this.props.userId}/?edit`}>My Settings</Link></li>
            <li onClick={this.props.logOut}>Log Out</li>
          </ul>
        </div>
 	    );
 	  }
 }

 export default UserMenu;
