import React, { Component } from 'react';

import './Card.css';
import StartupBackCard from './StartupBackCard';
import StartupFrontCard from './StartupFrontCard';
class StartupCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <StartupBackCard />
          <StartupFrontCard />
        </div>
      </div>
    );
  }
}
export default StartupCard;
