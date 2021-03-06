import React, { Component } from 'react';

class CardDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card width">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/gotomarket" className="card-link">
            Card link
          </a>
          <a href="/gotomarket" className="card-link">
            Another link
          </a>
        </div>
      </div>
    );
  }
}

export default CardDemo;
