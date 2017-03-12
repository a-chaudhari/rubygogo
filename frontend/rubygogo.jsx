import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'
import Root from './components/root'

document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  let preload = {};
  if(window.currentUser){
    preload={
      session:window.currentUser
    }
  };
  window.currentUser = null;
  const store = configureStore(preload);
  ReactDOM.render(<Root store={store} />,root);
});
