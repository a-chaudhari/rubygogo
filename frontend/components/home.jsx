import React from 'react'
import CategoryTile from './explore/category_tile';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCategories();
  }

  render(){
    // debugger
    const cats = this.props.categories.slice(1).map(cat=>(
      <CategoryTile key={cat.id} category={cat}/>
    ))

    // debugger
    return(
      <div className="home-page">
        <div className="category-tiles-array">
          {cats}
        </div>
      </div>
    );
  }
}

export default Home;
