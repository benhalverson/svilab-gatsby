import React, { Fragment } from 'react';

import Layout from '../components/layout';

import SEO from '../components/seo';
import Videobackground from './videobackground';
import InnovationPrograms from '../components/innovationPrograms';
import './index.css';
import StartupLogos from '../components/startupLogos';

const IndexPage = () => (
  <Fragment>
    <Videobackground />
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className="row">
        <div className="col">
          <div className="jumbotron video sorta-transparent home">
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
          <div
            class="card corporate-color"
            style={{ width: '18rem;', color: '#ffffff' }}
          >
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title card-title-spacing"
                style={{ fontWeight: 'bold' }}
              >
                Corporates
              </h5>
              <a href="#" class="btn btn-primary">
                Learn More
              </a>
              {/* <p class="card-text">Some quic    k example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            class="card"
            style={{
              width: '18rem;',
              backgroundColor: '#cc3d22',
              color: '#ffffff'
            }}
          >
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title card-title-spacing"
                style={{ fontWeight: 'bold' }}
              >
                Startups
              </h5>
              {/* <p class="card-text">Some quic    k example text to build on the card title and make up the bulk of the card's content.</p> */}
              <a href="#" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            class="card"
            style={{
              width: '18rem;',
              backgroundColor: '#7f022f',
              color: '#ffffff'
            }}
          >
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5 class="card-title" style={{ fontWeight: 'bold' }}>
                Accelerators <br /> (private & govt.)
              </h5>
              {/* <p class="card-text">Some quic    k example text to build on the card title and make up the bulk of the card's content.</p> */}
              <a href="#" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            class="card"
            style={{
              width: '18rem;',
              backgroundColor: '#178271',
              color: '#ffffff',
              fontWeight: 'bold'
            }}
          >
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5 class="card-title" style={{ fontWeight: 'bold' }}>
                Investors, Angels, <br /> & Family Offices
              </h5>
              {/* <p class="card-text">Some quic    k example text to build on the card title and make up the bulk of the card's content.</p> */}
              <a href="#" class="btn btn-primary">
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
      <div className="row">
        <div className="col">
          <StartupLogos />
        </div>
      </div>
    </Layout>
  </Fragment>
);

export default IndexPage;
