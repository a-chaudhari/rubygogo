import React from 'react';
import merge from 'lodash/merge';

class ProfileEdit extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user:this.props.user,
      profileFile: null,
      profileURL: this.props.user.profile_img_url,
      avatarFile: null,
      avatarURL: this.props.user.avatar_img_url
    };
  }


  inputGen(name,value,key=value){
    return(
      <label key={key}>{name}
        <input value={this.state.user[value]} onChange={this.update(value).bind(this)}/>
      </label>
    );
  }

  update(field){
    return (e)=>(this.setState({user:
      merge({},this.state.user,{[field]:e.target.value})
    }));
  }

  genFields(fields){
    return Object.keys(fields).map((field_key,idx)=>{

      return(
        this.inputGen(fields[field_key],field_key,idx)
      )
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    // formData.append()
    // const addl_keys = Object.keys(addl);
    Object.keys(this.state.user).forEach(key=>{
        formData.append(`user[${key}]`, this.state.user[key])
    });
    if(this.state.avatarFile !== null){
      formData.append("user[avatar_img]", this.state.avatarFile)
    }
    if(this.state.profileFile !== null){
      formData.append("user[profile_img]", this.state.profileFile)
    }
    // debugger
    this.props.updateUser(formData).then(res=>(
      this.props.receiveLogin({
        firstName: res.user.firstName,
        lastName: res.user.lastName,
        email: res.user.email,
        avatar_img_url: res.user.avatar_img_url,
        id: res.user.id})
    ))

  }

  updateFile(value){
    return (e)=>{
      const file = e.target.files[0]
      const fileReader = new FileReader();
      fileReader.onloadend = ()=>{
        this.setState({[`${value}File`]:file, [`${value}URL`]: fileReader.result })
      }
      if(file) fileReader.readAsDataURL(file);
    }
  }

  render(){
    const BASIC_INFO_FIELDS={
      'firstName':'First Name',
      'lastName':'Last Name',
      'address':'Address',
      'city':'City',
      'postal_code':'Post Code',
      'country':'Country'
    };


    return(
      <div >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div><h2>Basic Info</h2>
          {this.genFields(BASIC_INFO_FIELDS)}
          </div>
          <div><h2>Your Story</h2>
          {this.inputGen('Short Description','short_desc')}
          <label>About Me
          <textarea onChange={this.update('about_me').bind(this)} value={this.state.user.about_me}/>
          </label>
          </div>
          <div><h2>Your Photos</h2>
          <label>Avatar Image</label>
            <div className="profile-image-uploader avatar-img">
              <img src={this.state.avatarURL}/>
              <input className="big-filepicker" type="file" onChange={this.updateFile('avatar').bind(this)}/>
            </div>
            <label>Profile Image</label>
            <div className="profile-image-uploader profile-img">
              <img src={this.state.profileURL}/>
              <input className="big-filepicker" type="file" onChange={this.updateFile('profile').bind(this)}/>
            </div>
          </div>
          <input className="edit-submit" type="submit" value="SAVE"/>
        </form>
      </div>
    );
  }
}
// {this.inputGen('Profile Image','profile_img_url')}
// {this.inputGen('Avatar','avatar_img_url')}

export default ProfileEdit;
