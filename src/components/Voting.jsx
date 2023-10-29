import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons'

function Voting({video : {upvotes, downvotes}}) {
  const [upVotes, setUpVotes] = useState(upvotes);
  const [downVotes, setDownVotes] = useState(downvotes);
  
  function upVotesOnClickHandler(){
     setUpVotes((prevState) => prevState + 1);
  }
  function downVotesOnClickHandler(){
    setDownVotes((prevState) => prevState + 1);
  }
  return (
    <div className="video-container-item">
          <button onClick={upVotesOnClickHandler}>
            {upVotes + " "}<FontAwesomeIcon icon={faThumbsUp}/>
          </button> 
          <button onClick={downVotesOnClickHandler}>
            {downVotes + " "}<FontAwesomeIcon icon={faThumbsDown} />
          </button>
    </div>
  )
}

export default Voting