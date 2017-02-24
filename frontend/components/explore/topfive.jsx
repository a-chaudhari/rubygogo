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

  }

  movementDone(){
    if(this.state.dir =='right') this.movementDoneRight();
    else if(this.state.dir =='left') this.movementDoneLeft();
  }

  movementDoneRight(){
    console.log("movement done right")
    // this.setState({move:false});
    this.state.camps.unshift(this.state.camps.pop())
    this.setState({move:false, camps:this.state.camps})
  }
  movementDoneLeft(){
    console.log("movement done left")
    // this.setState({move:false});
    this.state.camps.push(this.state.camps.shift())
    this.setState({move:false, camps:this.state.camps})
  }

  componentWillReceiveProps(newProps){
    console.log("new props in topfive")
    this.setState({camps:newProps.topfive})
    // const elm = document.getElementById('featuretopfive')
    // debugger
    // elm.addEventListener('animationend', this.movementDone)

  }
  componentWillUnmount(){
    const elm = document.getElementById('featuretopfive')
    elm.removeEventListener('animationend',this.movementDone);
  }

  scrollerClick(idx){
    return (e)=>{
      console.log(idx+" is clicked")
      if(idx === 3){
        console.log("3 clicked, so shift left")
        // debugger
        // this.state.camps.push(this.state.camps.shift())
        // this.setState({camps:this.state.camps})
        this.setState({move:true, dir:'left'});

      }
      else if(idx==1){
        console.log("1 clicked, so shift right")
        // this.state.camps.unshift(this.state.camps.pop())
        // this.setState({camps:this.state.camps})
        this.setState({move:true, dir:'right'});
      }
      else if(idx ===2){
        console.log("center click. trying something new...");
      }
    }
  }

  // detailsGen(){
  //   return(
  //
  //   )
  // }

  renderScroller(){
    const imageDivs= this.state.camps.map((top,idx)=>(
      <div key={"topfive"+idx} className="feature-topfive-imagediv">
        <img src={top.main_img_url}/>
        <div onClick={this.scrollerClick(idx).bind(this)} className={"feature-topfive-floatingimgdiv" + ` floatingimg-${idx}`}>
          <div className={"feature-topfive-floatingdetails" + (this.state.index === idx ? " feature-floatingdetails-shown" : "")}>{top.title}</div>
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
    return(
      <div>

        {this.renderScroller()}
      </div>
    );
  }
}



import { connect  } from 'react-redux';
import {fetchTopFive} from '../../actions/feature_actions';

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
)(TopFive);
