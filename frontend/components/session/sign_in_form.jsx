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
          <input  placeholder="Password" type="password" value={this.state.password}  onChange={this.update('password').bind(this)}/><br/>
          <button onClick={this.handleLogin.bind(this)}>LOG IN</button>
        </form>
 	    );
 	  }
 }

 export default SignInForm;
