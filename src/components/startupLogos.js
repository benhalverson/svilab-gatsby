import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';

import SiliconValley from '../images/SiliconValley-temp.png';
import Korea from '../images/Korea-temp.png';
import China from '../images/China-temp.png';
import Australia from '../images/Australia-temp.png';
import Austria from '../images/Austria-temp.png';
import Turkey from '../images/Turkey-temp.png';

class StartupLogos extends Component {
  state = { activeIndex: 0 };
  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    console.log('index', nextIndex);
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    const items = [
      {
        src: { SiliconValley }
      },
      {
        src: { Korea }
      },
      {
        src: { China }
      },
      {
        src: { Australia }
      },
      {
        src: { Austria }
      },
      {
        src: { Turkey }
      }
    ];
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        />
      );
    });

    return <Carousel activeIndex={activeIndex}>{slides}</Carousel>;
  }
}

export default StartupLogos;
