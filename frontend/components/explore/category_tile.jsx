import React from 'react';
import {withRouter} from 'react-router';

class CategoryTile extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(name){
    return (e)=>(this.props.router.push(`/category/${name}`))
  }

  render(){
    const c = this.props.category;
    return(
      <div onClick={this.handleClick(c.category).bind(this)} className="category-tile">
        <div className="category-image">
          <img src={c.cat_image_url}/>

        </div>
        <div className="category-black-layer">
          <div className="category-floating-div">
            <i className={c.cat_icon + " fa-lg category-icon"}></i>
            <div className="category-title">
              <span>{c.alt_name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryTile);
