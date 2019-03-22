import React from 'react';
import './AcceleratorsBackCard.css';
const AcceleratorsBackCard = () => {
  return (
    <div className="card-side side-back">
      <div className="card accelerators-color">
        <div>
          <h5 className="card-title card-title--yellow card-title-spacing">
            Accelerators <br /> (Private & Govt.) <br />
            Increase Startup Revenue!
          </h5>
          <div className="white-text">
            <div className="mask-data">
              Learn B2B Sales, Go-to-Market & How to Pitch to Investors
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
export default AcceleratorsBackCard;
