import React from 'react';
import './InvestorsBackCard.css';
const InvestorsBackCard = () => {
  return (
    <div className="card-side side-back">
      <div className="card angels-color">
        <div>
          <h5 className="card-title card-title--yellow card-title-spacing">
            Investors, Angels <br /> & Family Offices
            <p>Increase Startup Revenue & Valuation!</p>
          </h5>
          <div className="white-text">
            <div className="mask-data">
              Learn Investing in Startups, or, Get Sales / Operations Help for
              your Startups
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
export default InvestorsBackCard;
