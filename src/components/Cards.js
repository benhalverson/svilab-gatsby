import React, { Component } from 'react';

import { FlipCard } from 'react-flipcard';
class Cards extends Component {
  getInitialState() {
    return {
      isFlipped: false
    };
  }

  showBack = () => {
    this.setState({
      isFlipped: true
    });
  };

  showFront = () => {
    this.setState({
      isFlipped: false
    });
  };

  handleOnFlip = flipped => {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  };

  handleKeyDown = e => {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  };
  render() {
    return (
      <>
        <FlipCard
          flipped={this.state.isFlipped}
          onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}
        >
          <div>
            <div>Front</div>
            <div>
              <small>(horizontal flip)</small>
            </div>
          </div>
          <div>Back</div>
        </FlipCard>
      </>
    );
  }
}

export default Cards;
