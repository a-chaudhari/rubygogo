import React from 'react';

class Contributions extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchContributions(this.props.params.profile_id)
  }

  printContributions(){
    return this.props.users.contributions.map((contrib,idx)=>{
      const date = new Date(contrib.date)
      const perk_title = (contrib.perk_title === null? "No Perk" : contrib.perk_title)
      return(
        <div key={idx} className="contribution-entry">
          <span className="tab-1">{date.toDateString()}</span>
          <span className="tab-2"><a href={`/#/campaign/${contrib.campaign_id}`}>{contrib.campaign_title}</a></span>
          <span className="tab-3"><strong>{`$${contrib.amount}`}</strong> {`${contrib.currency}`}</span>
          <span className="tab-4">{`${perk_title}`}</span>
          <span className="tab-5">{`${contrib.visibility}`}</span>
        </div>
      );
    });
  }

  render(){
    if(this.props.users === undefined){
      return null;
    }

    return(
      <div className="contributions-container">
        <h1>Don't worry, this tab and all its content is only visible to you.</h1>
        <div className='contributions-header'>
          <span className="tab-1">Date</span>
          <span className="tab-2">Campaign</span>
          <span className="tab-3">Amount</span>
          <span className="tab-4">Perk</span>
          <span className="tab-5">Visibility</span>
        </div>

        {this.printContributions()}
      </div>
    );
  }
}


import { connect  } from 'react-redux';
import {fetchContributions} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) =>{
  return(
    {
      users: state.users
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchContributions: id => dispatch(fetchContributions(id))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contributions);
