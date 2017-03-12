import React from 'react';
import SignIn from './session/sign_in';
import UserMenu from './session/user_menu';
import { withRouter} from 'react-router';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showUserMenu: false,
      query: ""
    }
  }

  update(field){
    return(e)=>(this.setState({[field]:e.target.value}))
  }


  toggleUserMenu(e){
    this.setState({
      showUserMenu: !this.state.showUserMenu
    });
  }

  signOut(){
    this.props.logOut().then(()=>(this.setState({showUserMenu: false})))
  }

  search(e){
    e.preventDefault();
    this.setState({query:""})
    this.props.router.push({pathname:"/search", query:{q:this.state.query}})
  }



  render(){
    let rightHeader="";
    if(this.props.session.email !== undefined){


      rightHeader=(
        <div className="header-right-signedin">
          <div onClick={()=>(this.props.router.push("start-a-campaign"))} className="header-create-button">START A CAMPAIGN</div>
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
            <li><a href="/#/category/all">Explore</a></li>
            <li><a href="https://github.com/a-chaudhari/rubygogo">GitHub Repo</a></li>
            <li><a href="http://www.amitchaudhari.com">Amit's Portfolio</a></li>
          </ul>
          <form onSubmit={this.search.bind(this)}>
            <div className="header-searchbar">
              <input onChange={this.update("query").bind(this)} value={this.state.query}/>
              <div className="header-search-overlay">
                <i className="fa fa-search fa-lg"></i>
              </div>
            </div>
          </form>
        </div>
        {rightHeader}

      </header>
    );
  }

}

export default withRouter(Header);
