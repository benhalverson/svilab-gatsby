import React from 'react'
// import { Link } from 'gatsby'
import {
  //Slide,
  Zoom
} from 'react-slideshow-image';

import Layout from '../components/layout'
import SEO from '../components/seo'

const images = [
  'https://via.placeholder.com/1920x1080.png?text=Golden+gate+image',
  'https://via.placeholder.com/1920x1080.png?text=Image+of+steve+talking+to+audience',
  'https://via.placeholder.com/1920x1080.png?text=Random+pic+of+something+inspiring'
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.8,
  arrows: false
}
const SecondPage = () => ( <
    Layout >
    <
    SEO title = "Page two" / >
    <
    Zoom {
      ...zoomOutProperties
    } > {
      images.map((each, index) => < img key = {
          index
        }
        style = {
          {
            width: "100%"
          }
        }
        src = {
          each
        }
        />)
      } <
      /Zoom> < /
      Layout >
    )

    export default SecondPage
