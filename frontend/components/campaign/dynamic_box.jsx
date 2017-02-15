import React from 'react'
import { withRouter } from 'react-router';

class DynamicBox extends React.Component{
  constructor(props){
    super(props);
    //story, comments, updates, backers
    this.state={
      mode: "story"
    };

    this.changePage= this.changePage.bind(this);
  }

  changePage(page){
    return () => (this.props.router.push(`/campaign/${this.props.params.id}/${page}`))
  }

  render(){
    let sB, uB, cB, bB = "";
    let content="";
    const mode= this.props.router.routes[this.props.router.routes.length-1].path

    switch(mode){
      case "story":
        sB="dynamic-selected";
        break;

      case "comments":
        cB="dynamic-selected";
        break;

      case "updates":
        uB="dynamic-selected";
        break;

      case "backers":
        bB="dynamic-selected";
        break;

      default:
        sB="dynamic-selected";
    }

    return(
      <div className="campaign-dynamicbox">
        <nav className="dynamicbox-navbar">
          <ul>
            <li className={sB}onClick={this.changePage('story')}>STORY</li>
            <li className={uB}onClick={this.changePage('updates')}>UPDATES</li>
            <li className={cB}onClick={this.changePage('comments')}>COMMENTS</li>
            <li className={bB}onClick={this.changePage('backers')}>BACKERS</li>
          </ul>

        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(DynamicBox);
