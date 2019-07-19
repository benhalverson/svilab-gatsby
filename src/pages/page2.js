import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
  CardText,
  Button
} from 'reactstrap';
import Layout from '../components/layout';
import demo from '../videos/5-Step-Msg-Min-SVEN.mp4';
import free from '../images/free-red.png';
import preso from '../images/presentation.png';
import timer from '../images/timer.png';
import './page2.css';
class Page2 extends Component {
  render() {
    return (
      <Container>
        <Layout>
          <Row>
            <Col>
              <div>
                <Card>
                  <CardBody>
                    <video
                      src={demo}
                      autoPlay={false}
                      controls="true"
                      width="480"
                    />
                  </CardBody>
                </Card>
              </div>
              <div className="left-spacing">
                <Card body inverse style={{ backgroundColor: '#1057c2' }}>
                  <CardBody>
                    <Row>
                      <Col lg={9}>
                        <CardTitle>
                          Make Your Elevator Pitch with the 5-Step Customer
                          Message
                        </CardTitle>

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

                    <Button className="orange-button">
                      Sign up for Free
                      <br /> Online Webinar
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col>
              <div className="right-spacing">
                <Card body inverse style={{ backgroundColor: '#1057c2' }}>
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

                    <Button>Click me</Button>
                  </CardBody>
                </Card>
              </div>

              <div className="right-spacing">
                <Card body inverse style={{ backgroundColor: '#1057c2' }}>
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

                    <Button>Click me</Button>
                  </CardBody>
                </Card>
              </div>

              <div>
                <Card body inverse style={{ backgroundColor: '#1057c2' }}>
                  <CardBody>
                    <Row>
                      <Col>
                        <CardTitle>Title 1</CardTitle>
                        <CardSubtitle>subtitle</CardSubtitle>
                        <CardText>Some text goes here</CardText>
                      </Col>
                      <Col>icons go here....</Col>
                    </Row>

                    <Button>Click me</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Layout>
      </Container>
    );
  }
}

export default Page2;
