import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from '../components/photos';

class PhotoGallery extends Component {
  render() {
    return (
      <div>
        <Gallery photos={photos} />
      </div>
    );
  }
}

export default PhotoGallery;
