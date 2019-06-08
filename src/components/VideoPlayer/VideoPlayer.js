import React from 'react';
import demo from '../../videos/5-Step-Msg-Min-SVEN.mp4';
import { Jumbotron } from 'reactstrap';
const VideoPlayer = () => {
  // const videoSource = `https://www.youtube.com/watch?v=Bey4XXJAqS8`;

  return (
    <Jumbotron className="">
       <iframe src={demo} title="video player" />
      {/* TODO: need video from steve */}
    </Jumbotron>
  );
};
export default VideoPlayer;
