import React from 'react';
import './CorporateBackCard.css';
const StartupBackCard = () => {
  return (
    <div className="card-side side-back">
      <div className="card startups-color">
        <div>
          <h5 className="card-title card-title--yellow card-title-spacing">
            Startups
          </h5>
          <div className="white-text">
            <div className="mask-data">
              You’ve made something disruptive – now Get Funded, Go-to-Market &
              Make B2B Sales
            </div>
            <a href="/gotomarket" className="btn btn-primary yellow-button">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartupBackCard;
