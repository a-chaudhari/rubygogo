import React from 'react';
import merge from 'lodash/merge';

class Perks extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editMode:false,
      perk:{
        id:-1,
        title:"",
        description: "",
        price:0,
        total_number:0,
        eta: "",
        campaign_id: this.props.id
      }
    }
  }

  componentDidMount(){
    this.props.fetchPerks(this.props.id)
  }


  componentWillReceiveProps(newProps){
    console.log("new props in perks ")
  }

  editPerkHandler(id){
    return(e)=>{
      this.setState({editMode:true,perk:this.findPerk(id)})

    }
  }

  newPerkHandler(){
    this.setState({editMode:true})
  }

  findPerk(id){
    for(let i = 0; i < this.props.perks.length;i++){
      if(this.props.perks[i].id === id){
        return this.props.perks[i]
      }
    }
  }



  createTable(){
    // debugger
    const rows = this.props.perks.map(perk=>(
      <tr key={"perks"+perk.id} onClick={this.editPerkHandler(perk.id).bind(this)}>
        <td>{perk.price}</td>
        <td>{perk.title}</td>
        <td>{perk.total_number}</td>
        <td>{perk.eta}</td>
        <td>{perk.description}</td>
      </tr>
    ))


    return(
      <div>
        <table>
          <tbody>
            <tr>
              <th>Price</th>
              <th>Title</th>
              <th>No</th>
              <th>Est. Delivery</th>
              <th>Description</th>
            </tr>
            {rows}
          </tbody>
        </table>
        <button onClick={this.newPerkHandler.bind(this)}>Add New Perk</button>
      </div>
  );
  }

  update(value){
    return e=>(this.setState({perk:merge({},this.state.perk,{[value]:e.target.value})}))
  }

  inputGen(name,value){
    return(
      <label key={"prkform"+value}>{name}
        <input value={this.state.perk[value]} onChange={this.update(value).bind(this)}/>
      </label>
    );
  }


  savePerk(){
    console.log("in save perk")
    if(this.state.perk.id === -1){

      this.props.createPerk(this.state.perk).then(this.cancelChanges());
    }
    else{
      this.props.updatePerk(this.state.perk).then(this.cancelChanges());
    }
  }

  cancelChanges(){
    this.setState({
      editMode:false,
      perk:{
        id:-1,
        title:"",
        description: "",
        price:0,
        total_number:0,
        eta: "",
        campaign_id: this.props.id
      }
    })
  }

  deletePerk(){
    console.log("in delete perk")
    console.log(this.state.perk)
    this.props.deletePerk(this.state.perk.id).then(this.cancelChanges())
  }

  createForm(){
    let deleteBtn = "";
    if(this.state.perk.id !== -1){
      deleteBtn = (<button onClick={this.deletePerk.bind(this)}>Delete!</button>);
    }
    return(
      <div>
        <form>
          {this.inputGen('Title','title')}
          {this.inputGen('Description','description')}
          {this.inputGen('Price','price')}
          {this.inputGen('Number Available ','total_number')}
          {this.inputGen('Estimated Delivery Date','eta')}
          <button onClick={this.savePerk.bind(this)}>Save</button>
          <button onClick={this.cancelChanges.bind(this)}>Cancel Changes</button>
          {deleteBtn}
        </form>

      </div>
    )
  }



  render(){
    // debugger
    // if(this.props.perks === undefined){
    //   return null;
    // }


    return (
      <div>
        {this.state.editMode? this.createForm(): this.createTable()}
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
