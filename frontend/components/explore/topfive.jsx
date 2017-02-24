import React from 'react'

class TopFive extends React.Component{
  constructor(props){
    super(props);
    this.state={
      camps:this.props.topfive,
      index: 2,
      move: false,
      dir: 'right'
    }
    // debugger
  }

  componentDidMount(){
    this.props.fetchTopFive();
    const elm = this.topfive;
    elm.addEventListener('animationend', this.movementDone.bind(this))
    this.loop = setInterval((e)=>(this.setState({move:true, dir:'left'})),9000)
  }

  movementDone(e){
    // debugger
    if(e.animationName === 'moveleft' || e.animationName === 'moveright'){
      if(this.state.dir =='right') this.movementDoneRight();
      else if(this.state.dir =='left') this.movementDoneLeft();
    }
  }

  movementDoneRight(){
    // console.log("movement done right")
    // this.setState({move:false});
    this.state.camps.unshift(this.state.camps.pop())
    this.setState({move:false, camps:this.state.camps})
  }
  movementDoneLeft(){
    // console.log("movement done left")
    // this.setState({move:false});
    this.state.camps.push(this.state.camps.shift())
    this.setState({move:false, camps:this.state.camps})
  }

  componentWillReceiveProps(newProps){
    // console.log("new props in topfive")
    this.setState({camps:newProps.topfive})
    // const elm = document.getElementById('featuretopfive')
    // debugger
    // elm.addEventListener('animationend', this.movementDone)

  }
  componentWillUnmount(){
    const elm = this.topfive;
    elm.removeEventListener('animationend',this.movementDone);
  }

  scrollerClick(idx){
    return (e)=>{
      clearInterval(this.loop);
      // // console.log("registeredscroller click!")
      // console.log(idx+" is clicked")
      if(idx === 3){
        // // console.log("3 clicked, so shift left")
        // debugger
        // this.state.camps.push(this.state.camps.shift())
        // this.setState({camps:this.state.camps})
        this.setState({move:true, dir:'left'});

      }
      else if(idx==1){
        // // console.log("1 clicked, so shift right")
        // this.state.camps.unshift(this.state.camps.pop())
        // this.setState({camps:this.state.camps})
        this.setState({move:true, dir:'right'});
      }
      else if(idx ===2){
        // // console.log("center click. trying something new...");
      }
    }
  }

  // detailsGen(){
  //   return(
  //
  //   )
  // }

  moveToImage(id){
    return(e)=>(this.props.router.push(`/campaign/${id}`));
  }

  fadeInClassGen(id){
    if(this.state.move){
      if(this.state.dir === 'left' && id===3) return " topfive-details-fadein";
      if(this.state.dir === 'right' && id===1) return " topfive-details-fadein";
      if(this.state.move && id === 2) return " topfive-details-fadeout"
    }
    return "";
  }

  // fadeOutClassGen(id){
  //   return "";
  // }

  renderScroller(){

    const imageDivs= this.state.camps.map((top,idx)=>(
      <div key={"topfive"+idx} className="feature-topfive-imagediv">
        <img src={top.main_img_url}/>
        <div onClick={this.scrollerClick(idx).bind(this)} className={"feature-topfive-floatingimgdiv" + ` floatingimg-${idx}`}>
          <div className="feature-topfive-floatingdetails">
            <div className={"topfive-desc"  + (idx===2 ? " topfive-desc-visible" : "")+ this.fadeInClassGen(idx)}>
              <strong>{top.title}</strong>
              {top.tagline}
            </div>
            <div onClick={this.moveToImage(top.id).bind(this)} className={"topfive-learnmore"  + (idx===2 ? " topfive-desc-visible" : "")+ this.fadeInClassGen(idx)}>See Campaign</div>
          </div>
        </div>
      </div>
    ))

    return(
      <div ref={(div)=>{this.topfive = div;}} className={"feature-topfive"}>
        <div className={"feature-topfive-inner" +(this.state.move ? ` topfive-move-${this.state.dir}` : "")} >
          {imageDivs}
        </div>
      </div>
    )
  }
  // <div className="feature-topfive-floatingdiv">
  //   <div className="feature-topfive-leftpane"></div>
  //   <div className="feature-topfive-centerpane">
  //     <h1>test</h1>
  //   </div>
  //   <div className="feature-topfive-rightpane"></div>
  // </div>


  render(){
    // debugger
    // if(this.state.camps.length === 0){
    //   return null;
    // }
    // this.state.camps.forEach(camp=>( console.log(camp.id)))
    return(
      <div>

        {this.renderScroller()}
      </div>
    );
  }
}



import { connect  } from 'react-redux';
import {fetchTopFive} from '../../actions/feature_actions';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) =>{
  // debugger
  return(
    {
      topfive: state.features.topfive
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchTopFive: ()=>dispatch(fetchTopFive())
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopFive));
