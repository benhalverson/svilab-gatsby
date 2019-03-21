import React from 'react';
import './AcceleratorsBackCard.css';
const AcceleratorsBackCard = () => {
  return (
    <div className="card-side side-back">
      <div className="card corporate-color">
        <div>
          <h5 className="card-title card-title--yellow card-title-spacing">
            Accelerators <br /> (Private & Govt.)
          </h5>
          <div className="white-text">
            <div className="mask-data">
              Get programs that focus on customer success & revenue. Learn B2B
              Sales, Go-to-Market & How to Pitch to Investors.
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
