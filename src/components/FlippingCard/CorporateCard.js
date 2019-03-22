import React, { Component } from 'react';
import '../../pages/flipper.css';

class CorporateCard extends Component {
  render() {
    return (
      <div className="flipper-container">
      <div className="front">
        <div className="inner">
          <p>front text</p>
        </div>
      </div>
      <div className="back">
        <div className="inner">
          <div>
            <h5 className="card-title card-title--yellow card-title-spacing">
              Corporates
              <br />
              Learn How AI, Blockchain, IoT & more Helps your Business.
            </h5>
            <div className="white-text">
              License, Acquire or Innovate & Go-to-Market
            </div>
            <a
              href="/gotomarket"
              className="btn btn-primary yellow-button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default CorporateCard;
