import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import './about.css';

const About = () => {
  return (
    <Layout>
      <SEO />
      <div className="row about-section">
        <div className="col">
          <div className="jumbotron">
            <p>
              Steve Austin is a sought - after international speaker and
              workshop leader for innovation topics.His focus is making
              competitive advantage using AI, blockchain and IoT.The goals are
              to enhance the Brand and turn innovation into revenue.
            </p>
            <p>
              Steve’ s unique background qualifies him to talk about
              innovation.He co - developed and brought a dozen high tech B2B
              products to market.He led sales operations in twelve countries
              installing solutions at over one - hundred global brands.These
              solutions helped IBM, Intel, SanDisk, SONY, Fujitsu, Samsung and
              Philips stay in front of the competition.
            </p>
            <p>
              Steve also understands defense needs.He delivered solutions to
              Grumman, Lawrence Livermore Labs, Boeing, TI and Litton.
            </p>
            <p>
              For the past four years Steve has presented workshops for
              thousands of entrepreneurs.He coaches in Silicon Valley, San
              Francisco, Beijing, Shanghai, Seoul, Daegu, Vienna, Innsbruck and,
              online to Sydney and Melbourne.He has presented talks at Tsinghua
              and SUES Universities in China and Stanford in California.
            </p>
            <p> He knows firsthand what innovators are working on. </p>
            <p>
              Book Steve Austin to learn how your company may benefit from
              disruptive technologies.Benefit from a seasoned global view from
              hundreds of projects and thousands of corporate visits.
            </p>
            <p>
              Contact Steve to discover new ways to enhance your Brand and turn
              innovation into revenue.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
