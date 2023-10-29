import React from 'react'

function Video({video : {title, embedUrl, views, createdAt}}) {
  return (
    <>
        <div className="video-container-item">
        <iframe
            width="700px"
            height="525"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            title={title}
            />
        </div>
        <div className="video-container-item">
        <p style={{
            fontSize : "20px",
            fontWeight: "bold"
        }}>{title}</p>
        </div>
        <div className="video-container-item">
          <p>{views + " Views | Uploaded " + createdAt}</p>
        </div>
    </>
  )
}

export default Video