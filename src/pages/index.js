import '../pages/flipper.css';
import './index.css';

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import { Link as GLink } from 'gatsby';
import Layout from '../components/layout';
import { CookieBanner } from '@palmabit/react-cookie-law';

import Seo from '../components/seo';
import Videobackground from './videobackground';
import InnovationPrograms from '../components/innovationPrograms';

import Pitching from '../components/pitching';
import Bar from '../components/Bar/bar';
import Sales from '../components/sales';
const IndexPage = () => (
  <Fragment>
    <Container>
      <Layout>
        <Seo
          title="Home"
          keywords={[`innovation`, `go-to-market strategy `, `investors`]}
        />
        <Videobackground />

        <Row className="top-row">
          <Col xs={{ size: 'auto' }}>
            <div className="jumbotron header video sorta-transparent home">
              <h1>
                <strong className="text-uppercase">
                  Strategize. Innovate.
                  <br /> Go-to-market
                </strong>
              </h1>
              <h2>Turn Innovation into Revenue!</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="3" xs="12">
            <div className="flipper-container">
              <div className="front startups-color">
                <div className="inner ">
                  <h5 className="card-title card-title--yellow card-title-spacing">
                    Startups, <br />
                    Sales & Growth Hacking
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
                      Grow Revenue & Valuation!
                    </h5>
                    <div className="white-text small-text">
                      Pitch-to-Investors. <br />
                      Go-to-Market, B2B Sales, <br />
                      Growth Hacking <br />
                      Get temp VP of Sales
                    </div>

                    <Link
                      activeClass="active"
                      to="pitching"
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                      className="btn btn-primary yellow-button"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3" xs="12">
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
                      Go-to-Market & <br /> How to Pitch-to-Investors
                    </div>
                    <GLink
                      to="/programsOffered"
                      className="btn btn-primary yellow-button"
                    >
                      Learn More
                    </GLink>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3" xs="12">
            <div className="flipper-container">
              <div className="front angels-color">
                <div className="inner">
                  <h5 className="card-title card-title--yellow card-title-spacing">
                    Investors, Angels &
                    <br />
                    Family Offices
                  </h5>
                  <p className="white-text small-text">
                    Investing in Tech?
                    <br />
                    Need Dealflow?
                    <br />
                    Are Startup Revenues too Low?
                  </p>
                </div>
              </div>
              <div className="back angels-color">
                <div className="inner">
                  <div>
                    <h5 className="card-title card-title--yellow card-title-spacing">
                      Investors, Angels &
                      <br />
                      Family Offices
                    </h5>
                    <p className="white-text small-text">
                      Increase Startup Revenue & Valuation!
                    </p>
                    <div className="white-text small-text">
                      Learn Investing in Startups,
                      <br />
                      Get Sales Help
                    </div>
                    <Link
                      activeClass="active"
                      to="temp"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="btn btn-primary yellow-button"
                    >
                      Learn More
                    </Link>

                    {/* TODO create an investors page to link to */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3" xs="12">
            <div className="flipper-container">
              <div className="front corporate-color">
                <div className="inner">
                  <h5 className="card-title card-title--yellow card-title-spacing">
                    Corporates
                  </h5>
                  <p className="white-text small-text">Ready to Disrupt?</p>
                  <div className="hidden-div" />
                </div>
              </div>
              <div className="back corporate-color">
                <div className="inner">
                  <div>
                    <h5 className="card-title card-title--yellow card-title-spacing">
                      Corporates
                      <br />
                      <br />
                      Learn How AI, Blockchain, IoT & More Helps your Business!
                    </h5>
                    <div className="white-text small-text">
                      License, Acquire or Innovate & Go-to-Market
                    </div>
                    <Link
                      activeClass="active"
                      to="corporateInnovation"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="btn btn-primary yellow-button"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Bar />

        <Pitching />

        <Sales />

        <Row>
          <Col>
            <p>Accelerator section goes here</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Investors section goes here</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Corporate section goes here</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <InnovationPrograms />
          </Col>
        </Row>
        <Row>
          <Col md="12" class="startup--logos">
            {/* <StartupLogos /> */}
          </Col>
        </Row>
      </Layout>
      <CookieBanner
        message="Nom nom nom accept the cookies please"
        onAccept={() => {}}
        onAcceptPreferences={() => {}}
        onAcceptStatistics={() => {}}
        onAcceptMarketing={() => {}}
      />
    </Container>
  </Fragment>
);

export default IndexPage;
