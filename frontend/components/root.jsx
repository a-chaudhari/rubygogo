import React from 'react';
import {Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';

const Root = (props) =>{
  return(
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
