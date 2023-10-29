import video from "../data/video.js";
import CommentsList from "./CommentsList.jsx";
import VideoContainer from "./VideoContainer.jsx";
import './App.css'
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState(true);

  function handleShowButtonClick(){
    setShowComments((prevState) => !prevState);
  }


  return (
    <div className="App">
      <VideoContainer video={video} showComments={showComments} handleShowButtonClick={handleShowButtonClick}/>
      <CommentsList comments={video.comments} showComments={showComments}/>
    </div>
  );
}

export default App;
