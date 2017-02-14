import React from 'react'
import SignInForm from './sign_in_form';
import SignUpForm from './sign_up_form';

 class SignIn extends React.Component{
 	  constructor(props){
 	    super(props);
      this.state={
        show: false,
        login: true
      };
 	  }





    toggleWindow(){
      this.setState({login:!this.state.login});
    }

    logInButton(){
      this.setState({show:true,login:true});
    }

    signUpButton(){
      this.setState({show:true,login:false});
    }

    closeWindow(){
      this.setState({show:false});
    }


 	  render(){

      let form = (<SignInForm  logIn={this.props.logIn} />)

      let text = "Don't have an account? "
      let switcher = (<a onClick={this.toggleWindow.bind(this)}>Sign Up Instead</a>)

      if(!this.state.login){
        form = (<SignUpForm signUp={this.props.signUp}/>)
        text= "Already have an account? "
        switcher = (<a onClick={this.toggleWindow.bind(this)}>Log In Instead</a>)
      }

      const cname = "header-login-container " + ( this.state.show ? "" : " header-hide")
 	    return(
        <div className="header-right-signedout">
          <button onClick={this.logInButton.bind(this)}>Sign In</button>
          <button onClick={this.signUpButton.bind(this)}>Sign Up</button>
          <div className={cname}>
            <div className="header-login-form">
              <div onClick={this.closeWindow.bind(this)} className="header-login-x">
                ✕
              </div>
              {form}
              {text}{switcher}
            </div>
          </div>
        </div>

 	    );
 	  }
 }

 export default SignIn;
