import React, { Component } from 'react';
// import { Carousel, CarouselItem } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';

import SiliconValley from '../images/SiliconValley-temp.png';
import Korea from '../images/Korea-temp.png';
import China from '../images/China-temp.png';
import Australia from '../images/Australia-temp.png';
import Austria from '../images/Austria-temp.png';
import Turkey from '../images/Turkey-temp.png';

class StartupLogos extends Component {
  render() {
    const items = [
      {
        src: SiliconValley,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: Korea,
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header'
      },
      {
        src: China,
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header'
      },
      {
        src: Australia,
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header'
      },
      {
        src: Austria,
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header'
      },
      {
        src: Turkey,
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header'
      }
    ];
    debugger;
    return (
      <UncontrolledCarousel
        items={items}
        autoPlay={true}
        indicators={false}
        controls={false}
      />
    );
  }
}

export default StartupLogos;
