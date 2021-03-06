import React from 'react'

class Backers extends React.Component{
  constructor(props){
    super(props);
    this.state={
      backers:[]
    }
  }

  componentDidMount(){
    this.props.fetchCampaignBackers(this.props.campaign.id)
  }

  getBackers(){
    return this.state.backers.map((backer,idx)=>{
      let name = backer.name
      if(!backer.anonymous){
        name=(<a href={`/#/profile/${backer.user_id}`}>{backer.name}</a>)
      }
      return (
      <div key={idx} className="backerEntry">
        <div className="backer-avatar-box"><img src={backer.avatar_img_url}/></div>
        <div className="backer-info-box">
          <h3>{name}</h3>
          <h3>{backer.pretty_date}</h3>
        </div>
        <div className="backer-amount-box"><h2><strong>${backer.amount}</strong> {backer.currency}</h2></div>
      </div>
    )
    });
  }

  componentWillReceiveProps(newProps){
    this.setState({
      backers: (this.state.backers.concat(newProps.campaign.backers))
    });
  }

  getMoreBackers(){
    this.props.fetchCampaignBackers(this.props.campaign.id, this.state.backers.slice(-1)[0].created_at)
  }

  render(){
    if(this.props.campaign.backers === undefined){
      return null;
    }

    const morebutton = (<div onClick={this.getMoreBackers.bind(this)} className="see-more-button"> <span>See More Backers</span></div>);

    return(
      <div className="backers-container">
        {this.getBackers()}
        {(this.props.totalNum > this.state.backers.length) && morebutton}
      </div>
    );
  }
}

export default Backers;
