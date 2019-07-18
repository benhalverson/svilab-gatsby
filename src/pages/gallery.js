import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from '../components/photos';
import Layout from '../components/layout';
import SEO from '../components/seo';
class PhotoGallery extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Gallery photos={photos} />
      </Layout>
    );
  }
}

export default PhotoGallery;
