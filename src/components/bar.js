import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class Bar extends Component {
  render() {
    return (
      <Row>
        <Col xs="12" md="12" lg="12" xl="12">
          <div className="jumbotron sub-header">
            <Row>
              <Col xs="12" md="4">
                <p className="white-text">
                  We help take your innovation to customers, increase sales
                  revenue and grow the company – especially B2B - in the US and
                  globally.
                </p>
              </Col>
              <Col xs="12" md="4">
                <p className="white-text">
                  We provide workshops, consulting and experts to support your
                  revenue targets.
                </p>
              </Col>
              <Col xs="12" md="4">
                <p className="white-text">
                  Our Goal is to get your innovation company to its first $1M
                  revenue. Then, … more! Rollover the buttons for details.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
}
