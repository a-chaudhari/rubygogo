import React from 'react';
import HeaderContainer from './header_container';
import Debug from './debug';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <HeaderContainer/>
        {this.props.children}
        <Debug/>
      </div>
    );
  }

}

export default App;
