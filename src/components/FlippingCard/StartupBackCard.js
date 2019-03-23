import React from 'react';
import './CorporateBackCard.css';
const StartupBackCard = () => {
  return (
    <div className="card-side side-back">
      <div className="card startups-color">
        <div>
          <h5 className="card-title card-title--yellow card-title-spacing">
            Startups
            <p className="white-text">Grow Customers, Revenue & Valuation!</p>
          </h5>
          <div className="white-text">
            <div className="mask-data">
              Learn Go-to-Market, B2B Sales & Pitch-to-Investors. Get temp VP of
              Sales / COO
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
