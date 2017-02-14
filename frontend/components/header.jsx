import React from 'react';
import SignIn from './session/sign_in';

class Header extends React.Component{
  constructor(props){
    super(props);
  }



  componentWillReceiveProps(newProps){
    console.log("new props!");
  }

  render(){
    let rightHeader="";
    if(this.props.session.email !== undefined){
      rightHeader=(
        <div className="header-right-signedin">
          welcome: {this.props.session.email}
          <button onClick={this.props.logOut.bind(this)}>Sign Out</button>
        </div>
      );
    }
    else{
      rightHeader=(
        <SignIn signUp = {this.props.signUp} logIn = {this.props.logIn}/>
      );
    }

    return(
      <header className="site-header">
        <div className="header-left">
          RubyGOGO Explore How it works
        </div>
        {rightHeader}

      </header>
    );
  }

}

export default Header;
