import React from 'react';
import demo from '../videos/demo.mp4'
const VideoPlayer = () => {

  // const videoSource = `https://www.youtube.com/watch?v=Bey4XXJAqS8`;

  return(
    <div>
      <iframe src={demo} title="video player" />
    </div>
  )
}
export default VideoPlayer;