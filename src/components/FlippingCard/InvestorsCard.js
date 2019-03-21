import React, { Component } from 'react';
import InvestorsFrontCard from './InvestorsFrontCard';
import InvestorsBackCard from './InvestorsBackCard';
import './Card.css';
class InvestorsCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <InvestorsBackCard />

          <InvestorsFrontCard />
        </div>
      </div>
    );
  }
}
export default InvestorsCard;
