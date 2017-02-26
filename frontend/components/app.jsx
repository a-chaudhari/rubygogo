import React from 'react';
import HeaderContainer from './header_container';
import Debug from './debug';
import Footer from './footer';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="wholeApp">
        <HeaderContainer/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }

}

export default App;
