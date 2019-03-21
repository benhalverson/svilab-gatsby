import './index.css';
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

//TODO Finish work on making the cards flip
// import FlipCard from 'react-flipcard';
//TODO: refactor row and col to make responsive
import Layout from '../components/layout';

import SEO from '../components/seo';
import Videobackground from './videobackground';
import InnovationPrograms from '../components/innovationPrograms';

import StartupLogos from '../components/startupLogos';
import CorporateCard from '../components/FlippingCard/CorporateCard';
import StartupCard from '../components/FlippingCard/StartupCard';
import AcceleratorCard from '../components/FlippingCard/AcceleratorsCard';
const IndexPage = () => (
  <Fragment>
    <Container>
      <Videobackground />
      <Layout>
        <SEO
          title="Home"
          keywords={[`innovation`, `go-to-market strategy `, `investors`]}
        />

        <div className="row top-row">
          <div className="col">
            <div className="jumbotron header video sorta-transparent home">
              <h1>
                <strong className="text-uppercase">
                  Strategize. Innovate. <br /> Go-to-market
                </strong>
              </h1>
              <h2>Turn Innovation into Revenue!</h2>
            </div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="col-md-3">
            <CorporateCard />
          </div>

          <div className="col-md-3">
            <StartupCard />
          </div>
          <div className="col-md-3">
            <AcceleratorCard />
          </div>
          <div className="col-md-3">
            <div
              className="card"
              style={{
                width: '12rem',
                backgroundColor: '#178271',
                color: 'yellow'
              }}
            >
              <div className="card-body" style={{ textAlign: 'center' }}>
                <h5
                  className="card-title"
                  style={{ fontWeight: 'bold', color: 'yellow' }}
                >
                  Investors, Angels <br /> & Family Offices
                </h5>
                <div className="mask-data">
                  Find a match, or, get sales help for your tech portfolio
                  investments.
                </div>
                {/* not a real link yet */}
                <a href="/gotomarket" className="btn btn-primary yellow-button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <InnovationPrograms />
          </div>
        </div>
        <Row>
          <Col>
            <div className="moveToBottom">
              <StartupLogos />
            </div>
          </Col>
        </Row>
      </Layout>
    </Container>
  </Fragment>
);

export default IndexPage;
