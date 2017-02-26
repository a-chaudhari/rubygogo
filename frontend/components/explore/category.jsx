import React from 'react';
import CampaignTile from './campaign_tile';
import {withRouter} from 'react-router';
import merge from 'lodash/merge';

class Category extends React.Component{
  constructor(props){
    super(props);
    this.state={
      category: this.props.params.category_id,
      quickfilter: "soonest",
      filter:{
        funded: 0,
        goal_type: 'all',
        status: 'all'
      },
      dropdown: false,
      offset: 0,
      camps:[]
    }
  }

  componentDidMount(){
    this.props.fetchCategory({category: this.state.category, quickfilter: this.state.quickfilter, filter: this.state.filter}).then(this.appendToState.bind(this));
    if(this.props.category.categories.length === 0){
      this.props.fetchCategories();
    }
  }

  appendToState(res){
    this.setState({camps: this.state.camps.concat(res.category)})
  }

  componentWillReceiveProps(newProps){
    if(newProps.params.category_id !== this.state.category){
      this.setState({category:newProps.params.category_id})
      this.props.fetchCategory({category: newProps.params.category_id, quickfilter: this.state.quickfilter, filter: this.state.filter}).then(res=>this.appendToState(res))
    }
  }

  renderTiles(){
    return this.state.camps.map((camp)=>{
      return(
        <CampaignTile key={"tile" + camp.id} campaign={camp}/>
      );
    });
  }

  getCategory(id){
    const cats = this.props.category.categories;
    for(let i =0;i<cats.length;i++){
      if(cats[i].category === id){
        return cats[i];
      }
    }
    console.error("ERROR no matching cat found")
  }

  categoryChange(e){
    this.setState({camps:[]})
    this.props.router.push(`/category/${e.target.value}`)
  }

  handleQFChange(e){
    this.setState({quickfilter:e.target.value, camps:[]})
    this.props.fetchCategory({category: this.state.category ,quickfilter: e.target.value, filter: this.state.filter}).then(this.appendToState.bind(this));

  }

  generateCategorySelect(){
    const options = this.props.category.categories.map(cat=>{
      return(
        <option key={"cat"+cat.id} value={cat.category}>{cat.alt_name}</option>
      );
    })
    return(
      <select value={this.state.category} onChange={this.categoryChange.bind(this)} >
        {options}
      </select>
    );
  }

  toggleDropdown(){
    this.setState({dropdown:!this.state.dropdown})
  }

  fetchMore(){
    this.props.fetchCategory({category: this.state.category, offset:this.state.camps.length ,quickfilter: this.state.quickfilter, filter: this.state.filter}).then(this.appendToState.bind(this));
  }

  circle(selected){
    let cname= "custom-circle"
    if(selected){
      cname += " custom-circle-selected"
    }
    return(
      <div className="circle-container">
        <div className={cname}></div>
      </div>
    );
  }

  filterBox(name, value,...bubbles){
    const entries = bubbles.map(bub=>{
      return(
        <div key={"bub"+value+bub.v} onClick={this.updateBox(value,bub.v).bind(this)} className="dropdown-filter-line">
          {this.circle(this.state.filter[value]==bub.v)}
          <span>{bub.n}</span>
        </div>
      );
    })

    return(
      <div className="dropdown-filter-minibox">
        <h3 className="dropdown-filter-minibox-title">{name}</h3>
        {entries}
      </div>
    );
  }

  updateBox(hash,value){
    return (e)=>{
      const newFilter = merge({},this.state.filter,{[hash]:value});
      this.setState({
        camps:[],
        filter:newFilter
      });
      this.props.fetchCategory({category: this.state.category ,quickfilter: this.state.quickfilter, filter: newFilter}).then(this.appendToState.bind(this));
    }
  }

  render(){
    if(this.props.category.categories.length===0){
      return null;
    }
    const cat = this.getCategory(this.state.category);
    return(
      <div className="category-listing-page">
        <div className="category-page-title">
          <h1>{cat.tagline}</h1>
        </div>
        <div className="category-page-quick-filter-box">
          {this.generateCategorySelect()}
          <select value={this.state.quickfilter} onChange={this.handleQFChange.bind(this)}>
            <option value={"soonest"}>Ending Soonest</option>
            <option value={"richest"}>Most Funded</option>
          </select>
        </div>
        <div className="category-page-dropdown-filter clearfix">
            <div className="dropdown-filter-controller clearfix">
              <h3 onClick={this.toggleDropdown.bind(this)} >{(this.state.dropdown ? "Hide Filters" : "Show Filters")}</h3>
            </div>
            <div className={"dropdown-filter-mainbox" + (this.state.dropdown ? " dropdown-opened": "")}>
              {this.filterBox('Percent funded', 'funded',{n:'All',v:'0'},{n:'0-25%',v:'1'},{n:'25-75%',v:'2'},{n:'75-100+%',v:'3'})}
              {this.filterBox('Goal type', 'goal_type',{n:'All',v:'all'},{n:'Fixed',v:'fixed'},{n:'Flexible',v:'flexible'})}
              {this.filterBox('Project status','status',{n:'All',v:'all'},{n:'Open',v:'open'},{n:'Ended',v:'ended'})}
            </div>
        </div>
        <div className="category-tiles-container">
          {this.renderTiles()}
        </div>
        <div className="category-button-div">
          <button className="category-show-more-button" onClick={this.fetchMore.bind(this)}>Show More</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Category);
