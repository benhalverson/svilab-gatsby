import React, { Component } from 'react';

import './Card.css';
import AcceleratorsBackCard from './AcceleratorsBackCard';
import AcceleratorsFrontCard from './AcceleratorsFrontCard';
class CorporateCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <AcceleratorsBackCard />
          <AcceleratorsFrontCard />
        </div>
      </div>
    );
  }
}
export default CorporateCard;
