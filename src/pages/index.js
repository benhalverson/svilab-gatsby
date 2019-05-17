import '../pages/flipper.css';
import './index.css';

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import { Link as GLink } from 'gatsby';
import Layout from '../components/layout';
import { CookieBanner } from '@palmabit/react-cookie-law';

import SEO from '../components/seo';
import Videobackground from './videobackground';
import InnovationPrograms from '../components/innovationPrograms';
import StartupLogos from '../components/startupLogos';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
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
                      Learn How AI, Blockchain, IoT & more Helps your Business.
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
          <Col md="3" xs="12">
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
                    {/* <Link
                      activeClass="active"
                      to="startups-accelerators"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="btn btn-primary yellow-button"
                    >
                      Learn More
                    </Link> */}
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
                    Investing in Tech? Are Startup Revenues too Low?
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
                      Increase Startup Revenue & Valuation
                    </p>
                    <div className="white-text small-text">
                      Learn Investing in Startups,
                      <br />
                      Get Sales / Operations Help for your Startups
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
        </Row>
        <Row>
          <Col xs="12" md="12" lg="12" xl="12">
            <div className="jumbotron sub-header">
              <Row>
                <Col xs="12" md="4">
                  <p className="white-text">
                    We help take your innovation to customers, increase sales
                    revenue and grow the company – especially B2B - in the US
                    and globally.
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
        <Row>
          <Col>
            <InnovationPrograms id="corporateInnovation" />
          </Col>
        </Row>
        <Row>
          <Col md="12" className="videoPlayer-Jumbotron">
            <VideoPlayer />
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
      <CookieBanner
        message="Nom nom nom accept the cookies please"
        onAccept = {() => {}}
        onAcceptPreferences = {() => {}}
        onAcceptStatistics = {() => {}}
        onAcceptMarketing = {() => {}}
      />
    </Container>
  </Fragment>
);

export default IndexPage;
