import React, { Component } from 'react';
// import { Carousel, CarouselItem } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';

import SiliconValley from '../images/SiliconValley-temp2.png';
import Korea from '../images/Korea-temp2.png';
import China from '../images/China-temp2.png';
import Australia from '../images/Australia-temp2.png';
import Austria from '../images/Austria-temp2.png';
import Turkey from '../images/Turkey-temp2.png';

class StartupLogos extends Component {
  render() {
    const items = [
      {
        src: SiliconValley
      },
      {
        src: Korea
      },
      {
        src: China
      },
      {
        src: Australia
      },
      {
        src: Austria
      },
      {
        src: Turkey
      }
    ];
    return (
      <UncontrolledCarousel
        className="bottom"
        items={items}
        autoPlay={true}
        indicators={false}
        controls={false}
        interval="3000"
      />
    );
  }
}

export default StartupLogos;
