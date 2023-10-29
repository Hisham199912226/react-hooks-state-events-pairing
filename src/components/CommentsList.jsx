import React from 'react'
import Comment from './Comment'
function CommentsList({comments, showComments}) {

  const commentsToDisplay = comments.map((comment, index) => {
      return <Comment key={index} comment={comment}/>
  });

  return (
    <div className="comments-list">
    <div className="comments-header">
      <h1>2 Comments</h1>
    </div>
      {showComments && commentsToDisplay}
  </div>
  )
}

export default CommentsList