import React from 'react'

 class SignUpForm extends React.Component{
 	  constructor(props){
 	    super(props);
      this.state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        errors: []
      }
 	  }

    update(field){
      return (e)=>{this.setState({[field]:e.target.value})};
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.signUp({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      });
    }


    getError(pname,field){
      if(this.props.errors !== undefined && this.props.errors[field] !== undefined && this.props.errors !== null){
        return pname+" "+ this.props.errors[field][0];
      }
      return "";
    }

    componentWillUnmount(){
      this.props.clear();
    }

 	  render(){
 	    return(
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder="First Name" value={this.state.firstName} onChange={this.update('firstName').bind(this)}   /><br/>
          <span>{this.getError("First Name",'firstName')}</span>
          <input placeholder="Last Name" value={this.state.lastName} onChange={this.update('lastName').bind(this)}   /><br/>
          <span>{this.getError("Last Name", 'lastName')}</span>
          <input placeholder="Email Address" value={this.state.email} onChange={this.update('email').bind(this)}   /><br/>
          <span>{this.getError("Email Address",'email')}</span>
          <input placeholder="Password" type="password" value={this.state.password} onChange={this.update('password').bind(this)}   /><br/>
          <span>{this.getError("Password",'password')}</span>
          <button onClick={this.handleSubmit.bind(this)}>CREATE AN ACCOUNT</button>
      </form>
 	    );
 	  }
 }

 export default SignUpForm;
