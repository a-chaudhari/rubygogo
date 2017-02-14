import React from 'react'

 class SignUpForm extends React.Component{
 	  constructor(props){
 	    super(props);
      this.state={
        firstName:'',
        lastName:'',
        email:'',
        password:''
      }
 	  }

    update(field){
      return (e)=>{this.setState({[field]:e.target.value})};
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.signUp(this.state);
    }

 	  render(){
 	    return(
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder="Email Address" value={this.state.email} onChange={this.update('email').bind(this)}   />
          <input placeholder="Password" value={this.state.password} onChange={this.update('password').bind(this)}   />
          <input placeholder="First Name" value={this.state.firstName} onChange={this.update('firstName').bind(this)}   />
          <input placeholder="Last Name" value={this.state.lastName} onChange={this.update('lastName').bind(this)}   />
        </form>
 	    );
 	  }
 }

 export default SignUpForm;
