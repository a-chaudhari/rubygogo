import React from 'react'

 class SignInForm extends React.Component{
 	  constructor(props){
 	    super(props);
      this.state={
        email: '',
        password: '',
        errors: ''
      };
      console.log(this.props.errors);
 	  }

    componentWillReceiveProps(newProps){
      console.log("new props sign in");
      console.log(newProps.errors);
      // debugger
      this.setState({errors:newProps.errors})
    }

    update(field){
      return (e)=>{this.setState({[field]:e.target.value})};
    }

    handleLogin(e){
      e.preventDefault()
      this.props.logIn({
        email: this.state.email,
        password: this.state.password
      });
    }

 	  render(){
      // debugger
 	    return(
        <form onSubmit={this.handleLogin.bind(this)}>
          <span>{this.state.errors}</span>
          <input placeholder="Email"  value={this.state.email} onChange={this.update('email').bind(this)}/><br/>
          <input  placeholder="Password" value={this.state.password}  onChange={this.update('password').bind(this)}/><br/>
          <div onClick={this.handleLogin.bind(this)}>LOG IN</div>
        </form>
 	    );
 	  }
 }

 export default SignInForm;
