import video from "../data/video.js";
import CommentsList from "./CommentsList.jsx";
import VideoContainer from "./VideoContainer.jsx";
import SearchBar from "./SearchBar.jsx";
import './App.css'
import { useState } from "react";
import SortComments from "./SortComments.jsx";


function App() {
  const intitialComments = video.comments.sort((a, b) => a.user.localeCompare(b.user));
  const [comments, setComments] = useState(intitialComments);
  const [showComments, setShowComments] = useState(true);
  const [commentsSearch, setCommentsSearch] = useState("");
  const [sortChoice, setSortChoice] = useState("A-Z");
  function handleShowButtonClick(){
    setShowComments((prevState) => !prevState);
  }

  function handleCommentsSearchChange(event){
    setCommentsSearch(event.target.value);
  }

  function handleRemoveComment(commentIndex){
    setComments(comments.filter((comment, index) => {
       return index != commentIndex;
    }));
  }

  function handleSortChoiceChange(event){
    const newSortValue = event.target.value;

    setSortChoice(newSortValue);
  

    const sortedComments = [...comments];
  
    if (newSortValue === "A-Z") {
      sortedComments.sort((a, b) => a.user.localeCompare(b.user));
    } else {
      sortedComments.reverse((a, b) => a.user.localeCompare(b.user));
    }
  
    setComments(sortedComments);
  }

  return (
    <div className="App">
      <VideoContainer video={video} showComments={showComments} handleShowButtonClick={handleShowButtonClick}/>
      <SearchBar commentsSearch={commentsSearch} onCommentsSearchChange={handleCommentsSearchChange}/>
      <SortComments sortChoice={sortChoice} onSortChoiceChange={handleSortChoiceChange}/>
      <CommentsList comments={comments} onRemoveCommentClick={handleRemoveComment} showComments={showComments} commentsSearch={commentsSearch}/>
    </div>
  );
}

export default App;
