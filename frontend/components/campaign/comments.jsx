import React from 'react'

class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state={
      body: "",
      comments: [],
      openReplyBoxes:{}
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

    this.props.createComment(this.props.campaign.id, this.state.body)
      .then(
        res=>(
          this.setState({body:"",comments: [res.comment].concat(this.state.comments)})
        )
      )
        // this.setState({comments: this.state.comments.unshift(res.comment)})
  }

  newCommentForm(parent_id=null){
    let cname = "submit-comment-button"
    if(this.state.body.length > 0 && this.state.body.length <= 500){
      cname += " button-enabled";
    }

    let textarea = (
        <textarea onChange={this.handleChange.bind(this)} value={this.state.body} />
    )

    if(this.props.session.id === undefined){
      textarea=(<span style={{display: 'block'}}>You need to login first.</span>)
    }
    return(
      <div className="comment-create-container">
        <form className="clearfix" onSubmit={this.submitForm.bind(this)}>
        {textarea}
          <span>{this.state.body.length} of 500</span>
          <button className={cname}>Post Comment</button>
        </form>
      </div>
    )
  }

  componentWillReceiveProps(newProps){
    // console.log("new props in comments")
    if(newProps.campaign.comments === undefined){
      return;
    }

    this.setState({
      comments: (this.state.comments.concat(newProps.campaign.comments))
    });
  }

  getMoreComments(){
    const last_comment = this.state.comments.slice(-1)[0];
    // console.log(last_comment)
    this.props.fetchComments(this.props.campaign.id,last_comment.created_at)
  }

  enableReplyButton(id){
    return (e)=>(this.setState({openReplyBoxes:
      Object.assign(this.state.openReplyBoxes,{[id]:(!!!this.state.openReplyBoxes[id])})
    }))
  }

  printComments(comments, children=false){
    // debugger
    return comments.map((comment,idx)=>{
      let children_items = null;
      let cname = "comment-entry" + (children ? " comment-entry-child" : "");
      if(comment.children.length > 0){
        // console.log("printing children")
        children_items = this.printComments(comment.children, true);
      }
      // debugger
      const replyform = ( !!this.state.openReplyBoxes[comment.id] ? this.newCommentForm(comment.id) : "")

      return(
          <div key={idx} className={cname}>
            <div className="avatar-box">
              <img src={comment.avatar_img_url}/>
            </div>
            <div className="comment-content">
              <div className="comment-byline">
                <strong><a href={`/#/profile/${comment.user_id}`}>{comment.name}</a></strong>
                <span>{comment.pretty_date}</span>
              </div>
              <div className="comment-body">
                {comment.body}
              </div>
              {children_items}
            </div>
          </div>
      );
    });
  }
  // {comment.parent_id === null && (<button onClick={this.enableReplyButton(comment.id).bind(this)}>Reply</button>)}
  // {comment.parent_id === null && replyform}



  render(){
    // if(this.props.campaign.comments)
    // debugger
    // console.log(this.state.openReplyBoxes)
    return(
      <div className="comments-container">
        {this.newCommentForm()}
        {this.printComments(this.state.comments)}
        <div className="comments-more-button">
          <span onClick={this.getMoreComments.bind(this)}>Show More</span>
        </div>
      </div>
    );
  }
}

export default Comments;
