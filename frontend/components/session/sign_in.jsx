import React from 'react'
import SignInForm from './sign_in_form';
import SignUpForm from './sign_up_form';
import {withRouter} from 'react-router';

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

    guestSignIn(){
      this.props.logIn({
        email:'guest@example.com',
        password:'password'
      });
    }

    stopProp(e){
      e.stopPropagation();
    }

 	  render(){

      let form = (<SignInForm  errors={this.props.errors} logIn={this.props.logIn} />)

      let text = "New to Rubygogo? "
      let switcher = (<a onClick={this.toggleWindow.bind(this)}>Sign Up</a>)

      if(!this.state.login){
        form = (<SignUpForm clear={this.props.clear} errors={this.props.uErrors} signUp={this.props.signUp}/>)
        text= "Already have an account? "
        switcher = (<a onClick={this.toggleWindow.bind(this)}>Log In</a>)
      }

      const cname = "header-login-container " + ( this.state.show ? "" : " header-hide")
 	    return(
        <div className="header-right-signedout">
          <ul className="header-right-ul">
            <li onClick={()=>(this.props.router.push("start-a-campaign"))} className="header-create-button">START A CAMPAIGN</li>
            <li onClick={this.signUpButton.bind(this)}>Sign Up</li>
            <li onClick={this.logInButton.bind(this)}>Log In</li>
            <li onClick={this.guestSignIn.bind(this)}>Demo Acct</li>
          </ul>
          <div onClick={this.closeWindow.bind(this)} className={cname}>
            <div onClick={this.stopProp.bind(this)} className="header-login-form">
              <div onClick={this.closeWindow.bind(this)} className="header-login-x">
                ✕
              </div>
              {form}
              <div className="header-hint">
                {text}{switcher}<br/>
              <div onClick={this.guestSignIn.bind(this)}>Guest Sign In</div>
              </div>
            </div>
          </div>
        </div>

 	    );
 	  }
 }

 export default withRouter(SignIn);
