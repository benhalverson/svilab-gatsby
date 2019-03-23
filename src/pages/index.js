import '../pages/flipper.css';
import './index.css';

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';

import SEO from '../components/seo';
import Videobackground from './videobackground';
import InnovationPrograms from '../components/innovationPrograms';

import StartupLogos from '../components/startupLogos';

const IndexPage = () => (
  <Fragment>
    <Container>
      <Layout>
        <SEO
          title="Home"
          keywords={[`innovation`, `go-to-market strategy `, `investors`]}
        />
        <Videobackground />

        <Row className="top-row">
          <Col md="12">
            <div className="jumbotron header video sorta-transparent home">
              <h1>
                <strong className="text-uppercase">
                  Strategize. Innovate. <br />
                  <br /> Go-to-market
                </strong>
              </h1>
              <h2>Turn Innovation into Revenue!</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <div className="flipper-container">
              <div className="front">
                <div className="inner">
                  <h5 className="card-title card-title--yellow card-title-spacing">
                    Corporates
                  </h5>
                  <p className="white-text small-text">Ready to Disrupt?</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div>
                    <h5 className="card-title card-title--yellow card-title-spacing">
                      Corporates
                      <br />
                      <br />
                      Learn How AI, Blockchain, IoT & more Helps your Business.
                    </h5>
                    <div className="white-text small-text">
                      License, Acquire or Innovate & Go-to-Market
                    </div>
                    <a
                      href="/gotomarket"
                      className="btn btn-primary yellow-button"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="flipper-container">
              <div className="front startups-color">
                <div className="inner ">
                  <h5 className="card-title card-title--yellow card-title-spacing">
                    Startups
                  </h5>
                  <p className="white-text small-text">Ready to Scale?</p>
                </div>
              </div>
              <div className="back startups-color">
                <div className="inner">
                  <div>
                    <h5 className="card-title card-title--yellow card-title-spacing">
                      Startups
                      <br />
                      Grow Customers, Revenue & Valuation!
                    </h5>
                    <div className="white-text small-text">
                      Learn Go-to-Market, <br />
                      B2B Sales & <br /> Pitch-to-Investors.
                      <br /> Get temp VP of Sales / COO
                    </div>
                    <a
                      href="/gotomarket"
                      className="btn btn-primary yellow-button"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="flipper-container">
              <div className="front accelerators-color">
                <div className="inner">
                  <h5 className="card-title card-title--yellow card-title-spacing">
                    Accelerators, <br />
                    (Private & Govt.)
                  </h5>
                  <p className="white-text small-text">
                    Need Programs for Customer & Revenue Growth?
                  </p>
                </div>
              </div>
              <div className="back accelerators-color">
                <div className="inner">
                  <div>
                    <h5 className="card-title card-title--yellow card-title-spacing">
                      Accelerators, <br />
                      (Private & Govt.)
                    </h5>
                    <p className="white-text small-text">
                      Increase Startup Revenue!
                    </p>
                    <div className="white-text small-text">
                      Learn B2B Sales, <br />
                      Go-to-Market & <br /> How to Pitch to Investors
                    </div>
                    <a
                      href="/gotomarket"
                      className="btn btn-primary yellow-button"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="flipper-container">
              <div className="front angels-color">
                <div className="inner">
                  <h5 className="card-title card-title--yellow card-title-spacing">
                    Investors, Family Offices & Angels
                  </h5>
                  <p className="white-text small-text">
                    Investing in Tech? Are Startup Revenues too Low?
                  </p>
                </div>
              </div>
              <div className="back angels-color">
                <div className="inner">
                  <div>
                    <h5 className="card-title card-title--yellow card-title-spacing">
                      Investors, Family Offices & Angels
                      <br />
                      <br />
                      Increase Startup Revenue & Valuation
                    </h5>
                    <div className="white-text small-text">
                      Learn Investing in Startups, or, <br />
                      Get Sales / Operations Help for your Startups
                    </div>
                    <a
                      href="/gotomarket"
                      className="btn btn-primary yellow-button"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <InnovationPrograms />
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <StartupLogos />
            </div>
          </Col>
        </Row>
      </Layout>
    </Container>
  </Fragment>
);

export default IndexPage;
