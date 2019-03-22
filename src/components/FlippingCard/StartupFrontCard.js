import React from 'react';
import './StartupFrontCard.css';

const StartupFrontCard = () => {
  return (
    <div className="card-side side-front">
      <div className="card startups-color">
        <div className="card-body">
          <h5 className="card-title card-title--yellow card-title-spacing">
            Startups
            <p className="white-text">Ready to Scale?</p>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default StartupFrontCard;
