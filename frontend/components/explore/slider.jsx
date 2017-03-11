import React from 'react';
import merge from 'lodash/merge';
import CampaignTile from './campaign_tile';

class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode: 'soonest',
      index: 0,
      category: "all"
    }
  }

  componentDidMount(){
    this.fetchCampsUsingFilters("all","soonest");
  }

  fetchCampsUsingFilters(category, mode){
    const filter = {funded: 0, goal_type: 'all', status: 'open'};
    return this.props.fetchCategory({category: category, quickfilter: mode, filter: filter})
  }

  changeMenu(mode){
    let cate = "all";
    let nmode = "soonest";
    switch(mode){
      case 'soonest':
        break;

      case 'richest':
        nmode = 'richest';
        break;

      case 'tech':
        cate="tech";
        break;

      case 'film':
        cate="film";
        break;
    }
    return(e)=>{
      this.fetchCampsUsingFilters(cate,nmode).then(this.setState({mode: mode}))
    }
  }

  sliderLeft(){
    let newIdx = this.state.index-4;
    if(newIdx < 0 ){
      newIdx += this.props.category.length;
    }
    this.setState({index: newIdx})

  }

  sliderRight(){
    let newIdx = this.state.index+4;
    if(newIdx > this.props.category.length){
      newIdx -= this.props.category.length
    }

    this.setState({index: newIdx});

  }

  render(){
    if(this.props.category.length === 0){
      return null;
    }

    let tilesToAdd=[]
    let indexToAdd=[]

    for(let i = 0;i<4;i++){
      let newIdx = this.state.index+i;
      if(newIdx > this.props.category.length-1){
        newIdx -= this.props.category.length
      }
      tilesToAdd.push(this.props.category[newIdx])
      indexToAdd.push(newIdx)
    }
    
    const tiles = tilesToAdd.map((camp,idx)=>(
      <CampaignTile key={"slidetile"+idx} campaign={camp}/>
    ))


    return(
      <div className="feature-slider">
        <div onClick={this.sliderLeft.bind(this)} className="slider-left-button slider-button"><i className="fa fa-chevron-left fa-5x"></i></div>
        <div className="feature-slider-content">

          <div className="feature-slider-menu">
            <ul>
              <li className={(this.state.mode==='soonest' ? "selected-li": "")} onClick={this.changeMenu('soonest')}>Ending Soonest</li>
              <li className={(this.state.mode==='richest' ? "selected-li": "")} onClick={this.changeMenu('richest')}>Most Funded</li>
              <li className={(this.state.mode==='tech' ? "selected-li": "")} onClick={this.changeMenu('tech')}>Tech</li>
              <li className={(this.state.mode==='film' ? "selected-li": "")} onClick={this.changeMenu('film')}>Film</li>
            </ul>
          </div>
          <div className="feature-slider-tilescontainer">
            {tiles}

          </div>
        </div>
        <div onClick={this.sliderRight.bind(this)} className="slider-right-button slider-button"><i className="fa fa-chevron-right fa-5x"></i></div>
      </div>
    );
  }
}




import { connect  } from 'react-redux';
import {fetchCategory} from '../../actions/feature_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      category: state.features.category
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchCategory: (data)=>dispatch(fetchCategory(data))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);
