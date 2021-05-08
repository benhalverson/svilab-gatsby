import React, { Component } from 'react';
// import HowToPitch from '../components/HowToPitch';
import Story from '../components/Story';
import GotoMarket from '../components/GoToMarket/GotoMarket';
import HardwareProducts from '../components/HardwareProducts/HardwareProducts';
import ExecutiveCoaching from '../components/ExecutiveCoach/ExecutiveCoaching';
import Layout from '../components/Layout/layout';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Seo from '../components/seo';
class ProgramsOffered extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Layout>
          <Seo
            title="Home"
            keywords={[`innovation`, `go-to-market strategy `, `investors`]}
          />
          <Row>
            <Col md="12" lg="12">
              <Jumbotron>
                <h3 id="startups-accelerators">
                  <strong>Programs Offered</strong>
                </h3>

                <div>{/* <HowToPitch /> */}</div>
                <div>
                  <Story />
                </div>
                <div>
                  <GotoMarket />
                </div>
                <div>
                  <HardwareProducts />
                </div>
                <div>
                  <ExecutiveCoaching />
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Layout>
      </Container>
    );
  }
}

export default ProgramsOffered;
