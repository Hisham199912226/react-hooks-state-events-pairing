import React, { useState } from 'react'
import './VideoContainer.css'
import Video from './Video'
import Voting from './Voting'
import ShowCommentsButton from './ShowCommentsButton'
import LineSeprator from './LineSeprator'

function VideoContainer({video, showComments, handleShowButtonClick}) {
 
  return (
    <div className="video-container" width="700px"> 
      <Video video={video}/>
      <Voting video={video}/>
      <ShowCommentsButton showComments={showComments} handleShowButtonClick={handleShowButtonClick}/>
      <LineSeprator/>
    </div>
  )
}

export default VideoContainer