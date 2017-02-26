import React from 'react';
import merge from 'lodash/merge';

class Perks extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editMode:false,
      errors:{},
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
    const rows = this.props.perks.map(perk=>(
      <tr key={"perks"+perk.id} className="perk-table-entry" onClick={this.editPerkHandler(perk.id).bind(this)}>
        <td>{perk.price}</td>
        <td>{perk.title}</td>
        <td>{perk.total_number}</td>
        <td>{perk.eta}</td>
        <td>{perk.description}</td>
      </tr>
    ))


    return(
      <div className="perks-table-container">
        <table className="perks-table">
          <tbody>
            <tr>
              <th className="table-price">Price</th>
              <th className="table-title">Title</th>
              <th className="table-no">No</th>
              <th className="table-eta">Est. Delivery</th>
              <th className="table-desc">Description</th>
            </tr>
            {rows}
          </tbody>
        </table>
        <button className="perks-creator-addbutton" onClick={this.newPerkHandler.bind(this)}>Create New Perk</button>
      </div>
  );
  }

  update(value){
    return e=>(this.setState({perk:merge({},this.state.perk,{[value]:e.target.value})}))
  }

  inputGen(name,value,type="text"){
    return(
      <label key={"prkform"+value}>{name}
        <input type={type} value={this.state.perk[value]} onChange={this.update(value).bind(this)}/>
        <span className="perk-form-errorline">{this.state.errors[value]}</span>
      </label>
    );
  }


  savePerk(e){
    e.preventDefault();
    if(!this.validate()){
      return;
    }
    if(this.state.perk.id === -1){

      this.props.createPerk(this.state.perk).then(this.cancelChanges());
    }
    else{
      this.props.updatePerk(this.state.perk).then(this.cancelChanges());
    }
  }

  validate(){
    let output = {};
    const p = this.state.perk;

    if(p.title.length === 0){
      output['title']="A title is required"
    }
    if(p.description.length === 0) output['description'] = "A description is required.";
    if(p.price <= 0) output['price']="A valid price is required";
    if(p.eta.length === 0)output['eta']="An ETA is required";
    if(p.total_number <= 0)output['total_number']="A total number is required";

    this.setState({errors:output});
    if(Object.keys(output).length > 0){
      return false
    }else {
      return true;
    }
  }

  cancelChanges(){
    this.setState({
      editMode:false,
      errors:{},
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
    this.props.deletePerk(this.state.perk.id).then(this.cancelChanges())
  }

  createForm(){
    let deleteBtn = "";
    if(this.state.perk.id !== -1){
      deleteBtn = (<button onClick={this.deletePerk.bind(this)}>Delete!</button>);
    }
    return(
      <div className="perks-creator-form">
        <form onSubmit={this.savePerk.bind(this)}>
          {this.inputGen('Title','title')}
          {this.inputGen('Description','description')}
          {this.inputGen('Price','price','number')}
          {this.inputGen('Number Available ','total_number','number')}
          {this.inputGen('Estimated Delivery Date','eta')}
          <button>Save</button>
        </form>
        <button onClick={this.cancelChanges.bind(this)}>Cancel Changes</button>
        {deleteBtn}

      </div>
    )
  }



  render(){
    return (
      <div className="editor-form perks-creator">
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
