import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardText,
  Button
} from 'reactstrap';
import steve from '../images/blue-steve.png';
import thumbnail1 from '../images/video-thumb1.png';
import thumbnail2 from '../images/video-thumb2.png';
import free from '../images/free-red.png';
import preso from '../images/presentation.png';
import timer from '../images/timer.png';
import './pitching.css';
class Pitching extends Component {
  render() {
    return (
      <>
        <Row id="pitching">
          <Col>
            <h1 style={{ color: 'black' }}>How To Pitch</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Card>
                <CardBody>
                  <img src={steve} alt="Steve Austin" width="480" />
                </CardBody>
              </Card>
            </div>
            <div className="left-spacing">
              <Card body className="gray-bg-image">
                <CardBody>
                  <Row>
                    <Col lg={9}>
                      <CardTitle>Make Your 60 Second Elevator Pitch</CardTitle>

                      <CardText>Make it Simple & Be Understood!</CardText>
                    </Col>
                    <Col lg={3}>
                      <img
                        src={timer}
                        alt="timer"
                        width="42"
                        className="icons"
                      />
                      <img
                        src={preso}
                        alt="presentation"
                        width="42"
                        className="icons"
                      />
                      <img src={free} alt="free" className="free" />
                    </Col>
                  </Row>

                  <Button className="orange-button">Sign Up For Free</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="right-spacing">
              <Card body className="light-blue-bg-image">
                <CardBody>
                  <Row>
                    <Col lg={9}>
                      <CardTitle>
                        How to Pitch Investors & Successfully Get Funded
                      </CardTitle>

                      <CardText>Get Skilled Up & Make it Happen…</CardText>
                    </Col>
                    <Col lg={3}>icons go here....</Col>
                  </Row>

                  <Button className="orange-button">Learn More</Button>
                </CardBody>
              </Card>
            </div>

            <div className="right-spacing">
              <Card body className="blue-bg-image">
                <CardBody>
                  <Row>
                    <Col lg={9}>
                      <CardTitle>
                        Get Your Pitch Deck Reviewed with Recommendations
                      </CardTitle>
                      <CardText>Save Time & Improve Your Game</CardText>
                    </Col>
                    <Col lg={3}>icons go here....</Col>
                  </Row>

                  <Button className="orange-button">Learn More</Button>
                </CardBody>
              </Card>
            </div>

            <div>
              <Card body inverse style={{ backgroundColor: '#96A8BE' }}>
                <CardBody>
                  <Row>
                    <Col>
                      <img src={thumbnail1} className="thumb" alt="thumbnail" />
                    </Col>
                    <Col>
                      <img src={thumbnail2} className="thumb" alt="thumbnail" />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Pitching;
