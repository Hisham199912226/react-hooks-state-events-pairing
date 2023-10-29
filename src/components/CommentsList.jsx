import React from 'react'
import Comment from './Comment'
function CommentsList({comments, onRemoveCommentClick, showComments, commentsSearch}) {

  const filteredCommentsByUserName = comments.filter((comment) => {
     if(commentsSearch === "")
      return true;
     const username  = comment.user;
     return username.includes(commentsSearch);
  });

  const commentsToDisplay = filteredCommentsByUserName.map((comment, index) => {
      return <Comment key={index} index ={index} comment={comment} onRemoveCommentClick={onRemoveCommentClick}/>
  });

  return (
    <div className="comments-list">
    <div className="comments-header">
      <h1>{commentsToDisplay.length + " Comments"}</h1>
    </div>
      {showComments && commentsToDisplay}
  </div>
  )
}

export default CommentsList