import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from '../components/Photos/photos';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
class PhotoGallery extends Component {
  render() {
    return (
      <Layout>
        <Seo />
        <Gallery photos={photos} />
      </Layout>
    );
  }
}

export default PhotoGallery;
