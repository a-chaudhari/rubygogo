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
import Create from './create';
import EditorContainer from './create/editor_container';
import CategoryContainer from './explore/category_container';
import HomeContainer from './home_container';
// import EditorPreview from './create/editor_preview';

const Root = (props) =>{
  return(
    <Provider store={props.store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={HomeContainer}/>
          <Root path='home' component={HomeContainer}/>
          <Route path='campaign/:campaign_id' component={CampaignContainer}>
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
          <Route path='start-a-campaign' component={Create}/>
          <Route path='category/:category_id' component={CategoryContainer}/>
        </Route>
        <Route path='/editor/:campaign_id' component={EditorContainer}/>
      </Router>
    </Provider>
  );
}
// <Route path='/campaign/:id/preview' component={EditorPreview}/>
// <IndexRoute component={Story}/>
// <Route path='story' component={Story}/>
// <Route path='updates' component={Updates}/>
// <Route path='comments' component={Comments}/>
// <Route path='backers' component={Backers}/>

export default Root;
