import React, { Component } from 'react';
import CorporateFrontCard from './CorporateFrontCard';
import CorporateBackCard from './CorporateBackCard';
import './Card.css';
class CorporateCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <CorporateBackCard />

          <CorporateFrontCard />
        </div>
      </div>
    );
  }
}
export default CorporateCard;
