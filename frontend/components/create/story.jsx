import React from 'react'

class Story extends React.Component{
  constructor(props){
    super(props);
    this.update = this.update.bind(this)
  }

  update(prop){
    return (e)=>this.props.setState({[prop]:e.target.value})
  }

  render(){
    return(
      <form>
        <label>Campaign Title
          <input value={this.props.editor.title} onChange={this.update('title')}/>
        </label>
      </form>
    );
  }
}

export default Story;
