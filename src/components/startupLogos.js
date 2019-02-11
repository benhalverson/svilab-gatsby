import React, { Component } from 'react';

import image1 from '../images/sv-logos.png';
import image2 from '../images/sv-logos2.png';

class StartupLogos extends Component {
  constructor(props) {
    super(props);
    this.state = { moving: true };
  }
  render() {
    return (
      <div>
        <marquee>
          <img src={image1} />
          <img src={image2} />
        </marquee>
      </div>
    );
  }
}

export default StartupLogos;
