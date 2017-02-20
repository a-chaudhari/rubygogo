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
import ProfileDetails from './profile/profile_details';
import Contributions from './profile/contributions';
import Activity from './profile/activity';
import Campaigns from './profile/campaigns';
import Debug from './debug';
import ContributionContainer from './contribution/contribution_container';
import DynamicBoxContainer from './campaign/dynamic_box_container';

const Root = (props) =>{
  return(
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='campaign/:id' component={CampaignContainer}>
          </Route>
          <Route path='profile/:profile_id' component={ProfileContainer}>
            <IndexRoute component={ProfileDetails}/>
            <Route path='profiledetails' component={ProfileDetails}/>
            <Route path='contributions' component={Contributions}/>
            <Route path='activity' component={Activity}/>
            <Route path='campaigns' component={Campaigns}/>
          </Route>
          <Route path='contribute' component={ContributionContainer}/>
          <Route path='debug' component={Debug}/>
        </Route>
      </Router>
    </Provider>
  );
}
// <IndexRoute component={Story}/>
// <Route path='story' component={Story}/>
// <Route path='updates' component={Updates}/>
// <Route path='comments' component={Comments}/>
// <Route path='backers' component={Backers}/>

export default Root;
