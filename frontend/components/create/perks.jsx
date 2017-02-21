import React from 'react'

class Perks extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPerks(this.props.id)
  }


  componentWillReceiveProps(newProps){
    console.log("new props in perks ")
  }


  createTable(){
    debugger
    const rows = this.props.perks.map(perk=>(
      <tr>
        <td>{perk.price}</td>
        <td>{perk.title}</td>
        <td>{perk.total_number}</td>
        <td>{perk.eta}</td>
        <td>{perk.description}</td>
      </tr>
    ))


    return(
      <table>
        <tr>
          <th>Price</th>
          <th>Title</th>
          <th>No</th>
          <th>Est. Delivery</th>
          <th>Description</th>
        </tr>
        {rows}
      </table>
    );
  }



  render(){
    // debugger
    // if(this.props.perks === undefined){
    //   return null;
    // }
    return (
      <div>
        {this.createTable()}
      </div>
    );
  }
}



import { connect  } from 'react-redux';
import { fetchPerks, createPerk, deletePerk, updatePerk } from '../../actions/perk_actions';



const mapStateToProps = (state, ownProps) =>{
  return(
    {
      perks: state.perks
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return(
    {
      fetchPerks: id =>dispatch(fetchPerks(id)),
      createPerk: perk=>dispatch(createPerk(perk)),
      deletePerk: id=>dispatch(deletePerk(id)),
      updatePerk: perk=>dispatch(updatePerk(perk))
    }
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Perks);
