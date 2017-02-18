import React from 'react'

class ProfileEdit extends React.Component{
  constructor(props){
    super(props);
    this.state=this.props.user;
  }

  inputGen(name,value,key=value){
    return(
      <label key={key}>{name}
        <input value={this.state[value]} onChange={this.update(value).bind(this)}/>
      </label>
    );
  }

  update(field){
    return (e)=>(this.setState({[field]:e.target.value}));
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
    this.props.updateUser(this.state).then(res=>(
      this.props.receiveLogin({
        firstName: res.user.firstName,
        lastName: res.user.lastName,
        email: res.user.email,
        avatar_img_url: res.user.avatar_img_url,
        id: res.user.id})
    ))

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
          <textarea onChange={this.update('about_me').bind(this)} value={this.state.about_me}/>
          </label>
          </div>
          <div><h2>Your Photos</h2>
          {this.inputGen('Profile Image','profile_img_url')}
          {this.inputGen('Avatar','avatar_img_url')}
          </div>
          <input className="edit-submit" type="submit" value="SAVE"/>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
