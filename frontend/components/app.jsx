import React from 'react';
import HeaderContainer from './header_container';
import Debug from './debug';
import Footer from './footer';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // <Debug/>
    // debugger
    return(
      <div>
        <HeaderContainer/>
        {this.props.children}
      </div>
    );
  }

}

export default App;
