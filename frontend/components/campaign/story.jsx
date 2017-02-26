import React from 'react'

class Story extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    if(this.props.campaign.id === undefined){
      return null;
    }
    const camp = this.props.campaign;

    return(
      <p>{camp.pitch_text}</p>
    );
  }
}

export default Story;
