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
      console.log("closing sign in")
      this.setState({show:false});
    }


 	  render(){

      let form = (<SignInForm  logIn={this.props.logIn} />)

      let text = "New to Rubygogo? "
      let switcher = (<a onClick={this.toggleWindow.bind(this)}>Sign Up</a>)

      if(!this.state.login){
        form = (<SignUpForm signUp={this.props.signUp}/>)
        text= "Already have an account? "
        switcher = (<a onClick={this.toggleWindow.bind(this)}>Log In</a>)
      }

      const cname = "header-login-container " + ( this.state.show ? "" : " header-hide")
      console.log(switcher);
 	    return(
        <div className="header-right-signedout">
          <ul className="header-right-ul">
            <li className="header-create-button">START A CAMPAIGN</li>
            <li onClick={this.signUpButton.bind(this)}>Sign Up</li>
            <li onClick={this.logInButton.bind(this)}>Log In</li>
          </ul>
          <div className={cname}>
            <div className="header-login-form">
              <div onClick={this.closeWindow.bind(this)} className="header-login-x">
                ✕
              </div>
              {form}
              <div className="header-hint">
                {text}{switcher}
              </div>
            </div>
          </div>
        </div>

 	    );
 	  }
 }

 export default SignIn;
