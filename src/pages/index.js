import React from 'react'

import Layout from '../components/layout'

import SEO from '../components/seo'
import Videobackground from './videobackground';
import './index.css';
import InnovationPrograms from '../components/innovationPrograms';

const IndexPage = () => (
  <>
  <Videobackground/>
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
    <div className="row">
      <div className="col">
      <div className="jumbotron sorta-transparent home">
        <h1><strong className="text-uppercase">Strategize. Innovate. <br /> Go-to-market</strong></h1>
        <p><strong>Corporates:</strong> Learn how innovation, AI, blockchain and IoT is transforming business.</p>
        <p><strong>Startups:</strong>You've made something disruptive - now get it funded and Go-to-Market!</p>
        <p><strong>Learn how <span className="alert alert-danger">Silicon Valey i-Lab</span> helps you</strong></p>
        <h2>Turn Innovation into Revenue!</h2>
      </div>
      </div>
    </div>
    {/* <About/> */}
   <InnovationPrograms/>
  </Layout>
  </>
)

export default IndexPage
