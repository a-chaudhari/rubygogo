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
  }

  componentDidMount(){
    this.props.fetchTopFive();
    const elm = this.topfive;
    elm.addEventListener('animationend', this.movementDone.bind(this))
    this.loop = setInterval((e)=>(this.setState({move:true, dir:'left'})),9000)
  }

  movementDone(e){
    if(e.animationName === 'moveleft' || e.animationName === 'moveright'){
      if(this.state.dir =='right') this.movementDoneRight();
      else if(this.state.dir =='left') this.movementDoneLeft();
    }
  }

  movementDoneRight(){
    this.state.camps.unshift(this.state.camps.pop())
    this.setState({move:false, camps:this.state.camps})
  }
  movementDoneLeft(){
    this.state.camps.push(this.state.camps.shift())
    this.setState({move:false, camps:this.state.camps})
  }

  componentWillReceiveProps(newProps){
    this.setState({camps:newProps.topfive})
  }
  componentWillUnmount(){
    const elm = this.topfive;
    elm.removeEventListener('animationend',this.movementDone);
  }

  scrollerClick(idx){
    return (e)=>{
      clearInterval(this.loop);
      if(idx === 3){
        //right clicked, so shift left
        this.setState({move:true, dir:'left'});
      }
      else if(idx==1){
        // left clicked, so shift right
        this.setState({move:true, dir:'right'});
      }
    }
  }

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

  render(){
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
