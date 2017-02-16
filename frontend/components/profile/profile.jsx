import React from 'react'
import { withRouter} from 'react-router';
import ProfileEdit from './profile_edit';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode: 'profile',
      edit: false
    };
  }

  componentDidMount(){
    this.props.fetchUser(this.props.params.profile_id)
  }

  menuClick(topic){
    return (e)=>{
      let route = topic;
      if(topic === 'profile') route="profiledetails";
      this.props.router.push(`/profile/${this.props.params.profile_id}/${route}`);
      // this.setState({mode:topic});
    };
  }


  capFirstLtr(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  menuGenerator(mode){
    const TOPICS = ['profile','campaigns','contributions','activity'];

    const lis = TOPICS.map((topic,idx)=>{
      let cname="";
      if(mode === topic){
        cname = "dynamicbox-menu-selected"
      }
      // debugger
      return(
      <li key={idx} onClick={this.menuClick(topic).bind(this)} className={cname}>
        {this.capFirstLtr(topic)}</li>
    )})
    return lis;
    //generates a ul and li list of topics
  }

  showMode(){
    this.setState({edit: false});
  }

  editMode(){
    this.setState({edit:true});
  }

  render(){
    // debugger
    if(this.props.user===undefined){
      return null;
    }
    const u  = this.props.user;
    // debugger
    let mode = this.props.router.routes[this.props.router.routes.length-1].path
    if(mode === undefined || mode === 'profiledetails') mode = 'profile';
    let header = ""
    if(!u.public){

      if(this.state.edit){
        //TODO
      }
      header = (<div className="blackHeader"><header className="profile-editHeader">
        <button onClick={this.showMode.bind(this)}>View Profile</button>
        <button onClick={this.editMode.bind(this)}>Edit Profile & Settings</button>
      </header></div>)
    }

    const fullName = u.firstName + " " + u.lastName;
    const location = u.city + ", " + u.country;

    if(this.state.edit){
      return(
      <div className="outer-profile">
        {header}
        <div className="profile">
          <h1>{fullName}</h1>
          <h3>{location}</h3>
          <div className="profile-editbox">
            <ProfileEdit updateName={this.props.updateName} updateUser={this.props.updateUser} user={this.props.user}/>
          </div>
        </div>
      </div>
      );
    }

    return(
      <div className="outer-profile">
        {header}
      <div className="profile">
        <h1>{fullName}</h1>
        <h3>{location}</h3>
        <ul className="profile-dynamicbox-menu">
          {this.menuGenerator(mode)}
        </ul>
        <div className="profile-dynamicbox">
          {this.props.children}
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(Profile);
