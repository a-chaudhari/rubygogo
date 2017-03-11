import React from 'react';
import merge from 'lodash/merge';
import CampaignTile from './campaign_tile';

class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode: 'soonest',
      index: 0,
      category: "all",
      tileBlocks: [],
      move: false,
      dir: 'right'
    }
  }

  componentDidMount(){
    this.fetchCampsUsingFilters("all","soonest");
    const elm = this.slider;
    // console.log(elm)
    elm.addEventListener('animationend', this.movementDone.bind(this))
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
    // let newIdx = this.state.index-4;
    // if(newIdx < 0 ){
    //   newIdx += this.props.category.length;
    // }
    // this.setState({index: newIdx})
    this.setState({dir:'right', move:'true'})

  }

  sliderRight(){
    // let newIdx = this.state.index+4;
    // if(newIdx > this.props.category.length){
    //   newIdx -= this.props.category.length
    // }
    //
    // this.setState({index: newIdx});
    this.setState({dir:'left', move:'true'})
  }

  movementDone(e){
    console.log(e)
    const blocks = this.state.tileBlocks;
    if(e.animationName === 'slidermoveleft'){
      blocks.push(blocks.shift());
    }else if(e.animationName === 'slidermoveright'){
      blocks.unshift(blocks.pop())
    }
    else{
      console.log("unknown animation name: " + e.animationName)
      return;
    }
    this.setState({move:false, tileBlocks: blocks})
  }

  createTileBlocks(camps){
    let blocks = []
    for(let i =0;i< camps.length/4;i++){
      let block = []
      block.push(camps[i*4])
      block.push(camps[i*4+1])
      block.push(camps[i*4+2])
      block.push(camps[i*4+3])
      blocks.push(block)
    }
    return blocks
  }

  // componentDidMount(){
  //   // this.props.fetchTopFive();
  //   const elm = this.slider;
  //   // console.log(elm)
  //   elm.addEventListener('animationend', this.movementDone.bind(this))
  //   // this.loop = setInterval((e)=>(this.setState({move:true, dir:'left'})),9000)
  // }

  componentWillUnmount(){
    const elm = this.slider;
    elm.removeEventListener('animationend',this.movementDone);
  }



  componentWillReceiveProps(newProps){
    const blocks = this.createTileBlocks(newProps.category);
    if(blocks === undefined) return;
    blocks.unshift(blocks.pop());
    this.setState({tileBlocks: blocks});
  }

  renderTileBlock(block,key){
    const camps = block.map((camp)=>(
      <CampaignTile key={"slidetile"+camp.id} campaign={camp}/>
    ))
    return(
      <div key={key} className="slider-slidingblock">
        {camps}
      </div>
    )
  }

  render(){
    // if(this.state.tileBlocks.length === 0){
    //   return null;
    // }
    console.log(this.state.tileBlocks)
    const blocks = this.state.tileBlocks.map((block,idx)=>(
      this.renderTileBlock(block,idx)
    ))

    let slidercname = "";
    if(this.state.move){
      slidercname = (this.state.dir === 'left' ? " slider-move-left" : " slider-move-right")
    }
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
            <div ref={(div)=>{this.slider = div;}} className={"feature-slider-slider" + slidercname}>
              {blocks}
            </div>
          </div>
          <div onClick={this.sliderRight.bind(this)} className="slider-right-button slider-button"><i className="fa fa-chevron-right fa-5x"></i></div>
        </div>
      </div>
    );
  }


  // render(){
  //   if(this.props.category.length === 0){
  //     return null;
  //   }
  //   // this.createTileBlocks();
  //
  //   let tilesToAdd=[]
  //   let indexToAdd=[]
  //
  //   for(let i = 0;i<4;i++){
  //     let newIdx = this.state.index+i;
  //     if(newIdx > this.props.category.length-1){
  //       newIdx -= this.props.category.length
  //     }
  //     tilesToAdd.push(this.props.category[newIdx])
  //     indexToAdd.push(newIdx)
  //   }
  //
  //   const tiles = tilesToAdd.map((camp,idx)=>(
  //     <CampaignTile key={"slidetile"+idx} campaign={camp}/>
  //   ));
  //
  //
  //   return(
  //     <div className="feature-slider">
  //       <div onClick={this.sliderLeft.bind(this)} className="slider-left-button slider-button"><i className="fa fa-chevron-left fa-5x"></i></div>
  //       <div className="feature-slider-content">
  //
  //         <div className="feature-slider-menu">
  //           <ul>
  //             <li className={(this.state.mode==='soonest' ? "selected-li": "")} onClick={this.changeMenu('soonest')}>Ending Soonest</li>
  //             <li className={(this.state.mode==='richest' ? "selected-li": "")} onClick={this.changeMenu('richest')}>Most Funded</li>
  //             <li className={(this.state.mode==='tech' ? "selected-li": "")} onClick={this.changeMenu('tech')}>Tech</li>
  //             <li className={(this.state.mode==='film' ? "selected-li": "")} onClick={this.changeMenu('film')}>Film</li>
  //           </ul>
  //         </div>
  //         <div className="feature-slider-tilescontainer">
  //           {tiles}
  //
  //         </div>
  //       </div>
  //       <div onClick={this.sliderRight.bind(this)} className="slider-right-button slider-button"><i className="fa fa-chevron-right fa-5x"></i></div>
  //     </div>
  //   );
  // }
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
