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

      <div className="row top-row">
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
            style={{ width: '12rem;', color: 'yellow', paddingTop: '12px' }}
          >
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5 class="card-title card-title-spacing">Corporates</h5>
              <div className="mask-data">
                Learn how AI, blockchain, IoT & more may help your business.
                Find tech, license, acquire or innovate.
              </div>
              <a href="#" class="btn btn-primary yellow-button">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            class="card"
            style={{
              width: '12rem;',
              backgroundColor: '#cc3d22',
              color: '#ffffff'
            }}
          >
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title card-title-spacing"
                style={{
                  fontWeight: 'bold',
                  color: 'yellow',
                  paddingTop: '12px'
                }}
              >
                Startups
              </h5>
              <div className="mask-data">
                You’ve made something disruptive – now Get Funded, Go-to-Market
                & Make B2B Sales
              </div>
              <a href="#" class="btn btn-primary yellow-button">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            class="card"
            style={{
              width: '12rem;',
              backgroundColor: '#7f022f',
              color: 'yellow'
            }}
          >
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title"
                style={{ fontWeight: 'bold', color: 'yellow' }}
              >
                Accelerators <br /> (Private & Govt.)
              </h5>
              <div className="mask-data">
                Get programs that focus on customer success & revenue. Learn B2B
                Sales, Go-to-Market & How to Pitch to Investors.
              </div>
              <a href="#" class="btn btn-primary yellow-button">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            class="card"
            style={{
              width: '12rem;',
              backgroundColor: '#178271',
              color: 'yellow'
            }}
          >
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title"
                style={{ fontWeight: 'bold', color: 'yellow' }}
              >
                Investors, Angels <br /> & Family Offices
              </h5>
              <div className="mask-data">
                Find a match, or, get sales help for your tech portfolio
                investments.
              </div>
              <a href="#" class="btn btn-primary yellow-button">
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
