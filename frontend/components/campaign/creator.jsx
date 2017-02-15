import React from 'react'

class Creator extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const c = this.props.creator;
    if(c===undefined){
      return(null)
    }
    // debugger
    return(
      <div className="campaign-author-info">

        <img src={c.avatar_img_url}/>
        <ul>
          <li>{c.firstName} {c.lastName}</li>
          <li>location?</li>
          <li>profile link</li>
        </ul>
      </div>
    );
  }
}

export default Creator;
