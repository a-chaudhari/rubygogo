import React from 'react';
import SignIn from './session/sign_in';
import UserMenu from './session/user_menu';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showUserMenu: false
    }
  }



  componentWillReceiveProps(newProps){
    console.log("new props!");
  }

  toggleUserMenu(e){
    this.setState({
      showUserMenu: !this.state.showUserMenu
    });
  }

  signOut(){
    this.props.logOut().then(()=>(this.setState({showUserMenu: false})))
  }

  render(){
    let rightHeader="";
    if(this.props.session.email !== undefined){
      rightHeader=(
        <div className="header-right-signedin">
          <button onClick={this.toggleUserMenu.bind(this)}>{this.props.session.firstName + " "+this.props.session.lastName}</button>
          <UserMenu logOut={this.signOut.bind(this)} show={this.state.showUserMenu}/>
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
