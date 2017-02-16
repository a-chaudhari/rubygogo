import React from 'react';
import {Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import CampaignContainer from './campaign/campaign_container';
import Story from './campaign/story';
import Comments from './campaign/comments';
import Backers from './campaign/backers';
import Updates from './campaign/updates';
import ProfileContainer from './profile/profile_container';

const Root = (props) =>{
  return(
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='campaign/:id' component={CampaignContainer}>
            <IndexRoute component={Story}/>
            <Route path='story' component={Story}/>
            <Route path='updates' component={Updates}/>
            <Route path='comments' component={Comments}/>
            <Route path='backers' component={Backers}/>
          </Route>
          <Route path='profile/:profile_id' component={ProfileContainer}>
            
          </Route>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
