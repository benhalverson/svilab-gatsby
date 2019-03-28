import '../pages/flipper.css';
import './index.css';

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, animateScroll } from 'react-scroll';
import { Link as GLink } from 'gatsby';
import Layout from '../components/layout';

import SEO from '../components/seo';
import Videobackground from './videobackground';
import InnovationPrograms from '../components/innovationPrograms';
import StartupLogos from '../components/startupLogos';
const IndexPage = () => (
  <Fragment>
    <div>
      Connect with me on{' '}
      <a href="https://www.linkedin.com/in/steveaustin/">Linkedin</a>
    </div>
  </Fragment>
);

export default IndexPage;
