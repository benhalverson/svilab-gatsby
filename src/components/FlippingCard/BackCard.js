import React from 'react';
import './BackCard.css';
const BackCard = () => {
  return (
    <div className="card-side side-back">
      <div className="card corporate-color">
        <div>
          <h5 className="card-title card-title--yellow card-title-spacing">
            Corporates
          </h5>
          <div>
            Learn how AI, blockchain, IoT & more may help your business. Find
            tech, license, acquire or innovate.
          </div>
          <a href="/gotomarket" className="btn btn-primary yellow-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
export default BackCard;
