import React, { Component } from 'react';
import './flipper.css';

class Flipper extends Component {
  render() {
    return (
      <div class="wrapper">
        <div className="cols">
          <div className="col">
            <div class="container">
              <div class="front">
                <div class="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="front">
            <div class="inner">
              <p>Rocogged</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="front">
            <div class="inner">
              <p>Strizzes</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="front">
            <div class="inner">
              <p>Clossyo</p>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flipper;
