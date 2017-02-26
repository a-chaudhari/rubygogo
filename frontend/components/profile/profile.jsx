import React from 'react'
import { withRouter} from 'react-router';
import ProfileEdit from './profile_edit';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode: 'profile',
      edit: (this.props.location.search === "" ? false : true)
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
    };
  }


  capFirstLtr(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  menuGenerator(mode){
    let TOPICS = ['profile','campaigns'];
    if(!this.props.user.public){
      TOPICS = ['profile','campaigns','contributions'];
    }

    const lis = TOPICS.map((topic,idx)=>{
      let cname="";
      if(mode === topic){
        cname = "dynamicbox-menu-selected"
      }
      return(
      <li key={idx} onClick={this.menuClick(topic).bind(this)} className={cname}>
        {this.capFirstLtr(topic)}</li>
    )})
    return lis;
  }

  showMode(){
    this.setState({edit: false});
  }

  componentWillReceiveProps(newProps){

    if(this.props.params.profile_id !== newProps.params.profile_id){
      this.props.fetchUser(newProps.params.profile_id)
    }
    else if(this.props.location.search !== newProps.location.search){
      this.setState({
        edit: (newProps.location.search === "" ? false : true)
      });
    }

  }

  editMode(){
    this.setState({edit:true});
  }

  render(){
    if(this.props.user===undefined){
      return null;
    }
    const u  = this.props.user;
    let mode = this.props.router.routes[this.props.router.routes.length-1].path
    if(mode === undefined || mode === 'profiledetails') mode = 'profile';
    let header = ""
    if(!u.public){

      if(this.state.edit){
        //TODO
      }
      header = (<div className="blackHeader"><header className="profile-editHeader">

        <div className={this.state.edit ? "": "button-selected"} onClick={this.showMode.bind(this)}>
          <i className="fa fa-eye fa-2x" aria-hidden="true"></i>
          <span> View Profile</span>
          </div>
        <div className={this.state.edit? "button-selected": ""} onClick={this.editMode.bind(this)}>
          <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
          <span> Edit Profile & Settings</span>
          </div>
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
            <ProfileEdit receiveLogin={this.props.receiveLogin} updateUser={this.props.updateUser} user={this.props.user}/>
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
