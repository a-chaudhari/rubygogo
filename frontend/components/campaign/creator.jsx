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
    let location = ""
    let parts = []
    location += (c.city !== undefined? c.city : "")
    location += (c.country!== undefined ? (" "+ c.country) : "")
    return(
      <div className="campaign-author-info">

        <img src={c.avatar_img_url}/>
        <ul>
          <li>{c.firstName} {c.lastName}</li>
          <li>{location}</li>
          <li><a href={`/#/profile/${c.id}`}>About</a></li>
        </ul>
      </div>
    );
  }
}

export default Creator;
