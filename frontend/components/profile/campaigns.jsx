import React from 'react';
import {withRouter} from 'react-router';

class Campaigns extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCampaigns(this.props.params.profile_id)
  }

  printCreated(){
    // debugger
    return this.props.campaigns.created.map(
      (camp,idx)=>(
        this.printEntry(camp,true,idx)
      )
    )
  }
  printFunded(){
    // debugger
    return this.props.campaigns.contributed.map(
      (camp,idx)=>(
        this.printEntry(camp,false,idx)
      )
    )
  }

  fetchEditor(id){
    return (e) => (this.props.fetchEditor(id).then(res => this.props.router.push(`/editor/`)))
  }

  printEntry(camp, created=false, idx){
    let actions = "";
    let action_menu = "";
    if(created){
      actions = (<div className="actions-menu-button"><a href={`/#/editor/${camp.id}`}>Actions</a></div>);
    }
    return(
      <div key={idx} className="campaign-entry">
        <div className="image-box">
          <a href={`/#/campaign/${camp.id}`}><img src={camp.campaign_card_img_url}/></a>
        </div>
        <div className="campaign-header">
          <h2><a href={`/#/campaign/${camp.id}`}>{camp.title}</a></h2>
          {actions}
          {action_menu}
          <h3>by <a href={`/#/profile/${camp.user_id}`}>{camp.name}</a></h3>
          <div className="campaign-tagline-box">
            {camp.tagline}
          </div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <div className="campaigns-container">
        <h1>Campaigns I'm On</h1>
        {this.printCreated()}
        <h1> Campaigns I've Funded</h1>
        {this.printFunded()}
      </div>
    );
  }
}



import { connect  } from 'react-redux';
import { fetchCampaigns } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return(
    {
      campaigns: state.users.campaigns
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchCampaigns: id=>dispatch(fetchCampaigns(id)),
      fetchEditor: id=>dispatch(fetchEditor(id))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Campaigns));
