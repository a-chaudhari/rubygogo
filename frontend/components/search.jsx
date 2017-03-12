import React from 'react';
import CampaignTile from './explore/campaign_tile';
import {withRouter} from 'react-router';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state={
      query:"",
      results:[],
      hasMore: false,
      searching: true
    }
    this.title = ""
  }

  componentDidMount(){
    if (this.props.location.query.q === undefined) return;

    this.title = this.props.location.query.q;
    this.setState({query: this.props.location.query.q})
    this.props.sendSearch(this.props.location.query.q, this.props.location.query.o)
  }

  componentWillReceiveProps(newProps){
    if(this.props.search.timestamp === newProps.search.timestamp) return;

    let res = [];
    let more = false;
    if(this.props.location.query.q === newProps.location.query.q){
      res = this.state.results.concat(newProps.search.results);
      more = newProps.search.more
    }
    this.setState({results: res, hasMore: more, searching: false});
  }

  update(field){
    return(e)=>(this.setState({[field]:e.target.value}))
  }

  search(e){
    e.preventDefault();
    this.title = this.state.query;
    this.setState({results:[], hasMore:false, searching: true})
    this.props.router.replace({pathname:"/search", query:{q: this.state.query}})
    this.props.sendSearch(this.state.query);
  }

  getMore(e){
    e.preventDefault();
    this.props.sendSearch(this.state.query, this.state.results.length)
  }

  render(){
    const results = this.state.results.map((res,idx)=>(
      <div key={"stile"+res.id} className="search-result-entry">
        <CampaignTile campaign={res}/>
      </div>
    ));

    let title = "";
    if(this.title.length === 0){
      title = "Go ahead and explore!";
    }
    else if(this.state.searching){
      title = "Searching...";
    }
    else if(this.state.results.length === 0){
      title = `Sorry, we couldn't find any campaigns for ${this.title}`;
    }
    else{
      title = `Results for ${this.title}`;
    }

    return(
      <div className="search-page">

        <div className="search-page-header">
          <h1>{title}</h1>
          <form onSubmit={this.search.bind(this)}>

            <div className="search-input-container">
              <input value={this.state.query} onChange={this.update("query").bind(this)}/>
              <div className="search-input-overlay">
                <i className="fa fa-search fa-2x"></i>
              </div>
            </div>
            
          </form>
        </div>

        <div className="search-results">
          {results}
        </div>

        <div className="search-results-button-div">
          {(this.state.hasMore ? <button className="search-results-more" onClick={this.getMore.bind(this)}>Get More</button> : null)}
        </div>

      </div>
    );
  }
}

export default withRouter(Search);
