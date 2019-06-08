import React, { Component } from 'react';
import '../components/video.css';
import webvideo from '../videos/Web.mp4';
class Videobackground extends Component {
  render() {
    return (
      <div>
        <video className="background-video" loop autoPlay muted playsInline>
          <source src={webvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Videobackground;
