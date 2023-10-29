import React from 'react'

function ShowCommentsButton({showComments, handleShowButtonClick}) {
  return (
    <div className="show-comments-button hide-comments-button video-container-item">
          <button onClick={handleShowButtonClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>
    </div>
  )
}

export default ShowCommentsButton