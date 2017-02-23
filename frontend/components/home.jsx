import React from 'react'
import CategoryTile from './explore/category_tile';
import TopFive from './explore/topfive';
import Slider from './explore/slider';

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
        <TopFive/>
        <div className="home-topfive-placeholder"></div>
        <Slider/>
        <div className="category-tiles-array">
          {cats}
        </div>
      </div>
    );
  }
}

export default Home;
