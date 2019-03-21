import React, { Component } from 'react';
import Card from './Card';
import './CardContainer.css';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <Card />
        </div>
      </div>
    );
  }
}

export default CardContainer;
