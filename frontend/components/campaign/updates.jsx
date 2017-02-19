import React from 'react'

class Updates extends React.Component{
  constructor(props){
    super(props);
    this.state={
      body: ""
    };
  }

  componentDidMount(){
    this.props.fetchCampaignUpdates(this.props.campaign.id);
  }

  createUpdate(){
    this.props.create(this.props.campaign.id, this.state.body)
  }

  printUpdates(){
    return this.props.campaign.updates.map((update,idx)=>{
      return(
        <div key={idx} className="update-entry">
          <div className="update-entry-dateline">
            <h1>{update.pretty_date}</h1>
          </div>
          <div className="update-entry-body">
            {update.body}
          </div>
          <div className="update-entry-poster">
            <div className="avatar-box">
              <img src={update.avatar_img_url}/>
            </div>
            <div className="from-link">
              <a href={`/#/profile/${update.user_id}`}>{update.name}</a>
            </div>
          </div>
        </div>
      );
    });
  }

  handleChange(e){
    this.setState({body:e.target.value});
  }

  addUpdateBox(){
    if(this.props.campaign.user_id !== this.props.session.id){
      return null
    }

    return(
      <div className="add-update-container">
        <div className="add-update-title">Post A New Update</div>
        <form onSubmit={this.createUpdate.bind(this)}>
          <textarea value={this.state.body} onChange={this.handleChange.bind(this)}/>
          <button className="update-submit-button">Submit</button>
        </form>
      </div>
    )
  }

  render(){
    // debugger
    if(this.props.campaign.updates === undefined){
      return null;
    }
    // debugger

    return(
      <div className="update-container">
        {this.addUpdateBox()}
        {this.printUpdates()}
      </div>
    );
  }
}

export default Updates;
