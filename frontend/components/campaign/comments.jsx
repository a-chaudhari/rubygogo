import React from 'react'

class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state={
      body: "",
      comments: []
    };
  }

  componentDidMount(){
    this.props.fetchComments(this.props.campaign.id);
  }

  handleChange(e){
    this.setState({body: e.target.value});
  }

  submitForm(e){
    e.preventDefault();
    // this.props.
  }

  newCommentForm(){
    return(
      <div className="comment-create-container">
        <form >
          <textarea />
        </form>
      </div>
    )
  }

  componentWillReceiveProps(newProps){
    console.log("new props in comments")
    if(newProps.campaign.comments === undefined){
      return;
    }

    this.setState({
      comments: (this.state.comments.concat(newProps.campaign.comments))
    });
  }

  getMoreComments(){
    const last_comment = this.state.comments.slice(-1)[0];
    console.log(last_comment)
    this.props.fetchComments(this.props.campaign.id,last_comment.created_at)
  }

  printComments(comments, children=false){
    // debugger
    return comments.map((comment,idx)=>{
      let children = null;
      let cname = "comment-entry" + (children ? "comment-entry-child" : "");
      if(comment.children.length > 0){
        children = this.printComments(comment.children, true);
      }

      return(
          <div key={idx} className={cname}>
            <div className="avatar-box">
              <img src={comment.avatar_img_url}/>
            </div>
            <div className="comment-byline">
              <strong>{comment.name}</strong>
              <span>{comment.pretty_date}</span>
            </div>
            <div className="comment-body">
              {comment.body}
            </div>
            {children}
          </div>
      );
    });
  }

  render(){
    // if(this.props.campaign.comments)
    return(
      <div className="comments-container">
        {this.printComments(this.state.comments)}
        <div className="comments-more-button">
          <span onClick={this.getMoreComments.bind(this)}>Get More Comments</span>
        </div>
      </div>
    );
  }
}

export default Comments;
