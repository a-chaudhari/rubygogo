import React from 'react';
import SignIn from './session/sign_in';
import UserMenu from './session/user_menu';
import { withRouter} from 'react-router';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showUserMenu: false
    }
  }


  toggleUserMenu(e){
    // console.log("toggling")
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
          <div className="header-create-button">START A CAMPAIGN</div>
          <div onClick={this.toggleUserMenu.bind(this)}>{this.props.session.firstName + " "+this.props.session.lastName}</div>
          <UserMenu toggle={this.toggleUserMenu.bind(this)} userId={this.props.session.id} logOut={this.signOut.bind(this)} show={this.state.showUserMenu}/>
        </div>
      );
    }
    else{
      rightHeader=(
        <SignIn clear={this.props.clear} uErrors={this.props.user.errors} errors={this.props.session.errors} signUp = {this.props.signUp} logIn = {this.props.logIn}/>
      );
    }

    return(
      <header className="site-header">
        <div className="header-left">
          <ul>
            <li><a href="/#/">RUBYGOGO</a></li>
            <li>Explore</li>
            <li>How It Works</li>
          </ul>
        </div>
        {rightHeader}

      </header>
    );
  }

}

export default withRouter(Header);
