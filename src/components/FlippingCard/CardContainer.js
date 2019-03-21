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
      <div>
        <Card />
      </div>
    );
  }
}

export default CardContainer;
