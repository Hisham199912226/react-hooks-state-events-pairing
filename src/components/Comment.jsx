import React, { useState } from 'react'
import Voting from './Voting'
function Comment({comment:{user , comment }, index,  onRemoveCommentClick}) {
  return (
    <>
        <div className="comments-list-item">
        <h2>{user}</h2>
        <p>{comment}</p>
        </div>
        <Voting />
        <button onClick={() => onRemoveCommentClick(index)}>Remove Comment</button>
    </>
    
    
  )
}

export default Comment