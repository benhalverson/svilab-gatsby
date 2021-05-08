import './innovationPrograms.css';
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MoreInfoModal from './MoreInfoModal';
import KeynotesModal from './KeynotesFormModal';
import ConsultingFormModal from './ContactForm/ConsultingFormModal';
import WomanLeadership from './WomanLeadershipFormModal';
import RoundtablePanelsFormModal from './RoundtablePanelsFormModal';

export default class InnovationPrograms extends Component {
  render() {
    const buttonLabelText = `Send more info`;
    return (
      <Row>
        <Col>
          <div className="jumbotron innovation" id="corporateInnovation">
            <h1 className="display-5">Corporate Innovation</h1>
            <div>
              <p>
                Do you need a workshop for brainstorming innovation solutions?
                We deliver programs to:
              </p>
              <ul>
                <li>
                  Design your customer journey with possibilities using new
                  technologies
                </li>
                <li>
                  Develop innovation scenarios for product and service solutions
                </li>
                <li>
                  Discuss how AI, blockchain and IoT will alter your competitive
                  landscape – and how your company can adapt and win.
                </li>
              </ul>
            </div>
            <div>
              <MoreInfoModal buttonLabel={buttonLabelText} />
            </div>
            <h1 className="display-5">
              Program for Govt. & Private Accelerators
            </h1>
            <div>
              <p>
                Does your accelerator need training workshops for entrepreneurs?
              </p>
              <ul>
                <li>
                  We provide interactive workshops from 2 hours to all day, or,
                </li>
                <li>
                  2 to 10-day programs, depending on your needs and budget.
                </li>
              </ul>
              <p>
                We’ve delivered workshops around the world for 1000’s of
                entrepreneurs. Our workshops are skills based. We demonstrate a
                point – then have the attendees work on their solution and
                present the result.
              </p>

              <p>
                We know from experience that many entrepreneurs will avoid
                standing up and participating. We provide 1-on-1 coaching in
                presenting and have everyone get up and present several times
                during the program. The result is a clear increase in
                confidence!
              </p>
              <p>
                These workshops are geared for go-to-market activities to gain
                customers. We stress customer focus, build the sales pipeline,
                use metrics, budgeting and cash management and proper governance
                to achieve results.
              </p>
              <p>
                The outcome is that the entrepreneurs learn both leadership and
                presentation skills.
              </p>
              <p>
                We prefer to work with startups that already have a product
                concept and are ready to go-to-market. We are experienced in
                software, hardware, IoT and B2B sales and operations.
              </p>
            </div>

            <h1 className="display-5" id="temp">
              Boardroom
            </h1>
            <div>
              <p>
                Is your C-suite looking into Artificial Intelligence,
                Blockchain, or the Internet-of-Things, (IoT) – and searching for
                how to build this into your enterprise?
              </p>
              <p>
                We can help. We will map out __ working with mid-to-large
                corporations in North America, Europe and Asia. And, we know
                what entrepreneurs are doing right now in those places.
              </p>
              <p>
                E-mail us to talk about your objectives. Lets review and
                discover how your company can use technology to achieve your
                targets.
              </p>
            </div>

            <h1 className="display-5">Consulting</h1>
            <div>
              <p>
                Do you have a project in mind using AI, blockchain or IoT? We
                can help with the customer discovery, scenario planning, or a
                running customer validation project.
              </p>
              <p>
                We also provide project management to design and deliver a
                product.
              </p>
              <p>E-mail us to discuss your goals! </p>
            </div>
            <div>
              <ConsultingFormModal buttonLabel={buttonLabelText} />
            </div>

            <h1 className="display-5">Keynotes</h1>
            <div>
              <strong>Keynote Topics for Enterprises</strong>
              <ul>
                <li>
                  How opportunities are changing with AI and Blockchain in
                  global business
                </li>
                <li>
                  Changing customer attitudes about privacy and personal data
                  are driving new threats and opportunities
                </li>
              </ul>
              <strong>Keynotes for Entrepreneurs and Startups</strong>
              <ul>
                <li>Get your message tighter for much better results</li>
                <li>Five Keys to Building Effective Startups</li>
              </ul>
            </div>
            <div>
              <KeynotesModal buttonLabel={buttonLabelText} />
            </div>

            <h1 className="display-5">Roundtables and Panels</h1>
            <div>
              <strong>For Enterprises</strong>
              <p>
                Steve Austin is available to participate on Roundtables and
                Panels for topics in AI and blockchain.
              </p>
              <strong>For Entrepreneurs and Startups</strong>
              <p>
                Steve is available for discussions to contribute in these areas:
              </p>

              <ul>
                <li>Improving startup performance</li>
                <li>
                  Go-to-market operations, messaging, problems to avoid,
                  managing sales channels in B2B.
                </li>
                <li>Going international</li>
                <li>Building credibility selling to Enterprises</li>
              </ul>
              <RoundtablePanelsFormModal buttonLabel={buttonLabelText} />
            </div>

            <h1 className="display-5">Women in Leadership</h1>
            <div>
              <p>
                Steve provides workshops for women in leadership and management.
                The workshops are interactive -- the participants continuously
                add new skills to build out their effective message.
              </p>
              <strong>Outcomes</strong>

              <ul>
                <li>
                  Participants will be able to make more effective presentations
                  using a template to organize key points
                </li>
                <li>
                  Use body language to enhance key points and demonstrate
                  confidence
                </li>
                <li>
                  Use a story to highlight the key emotional elements and bring
                  your message to life.
                </li>
              </ul>
              <strong>Duration</strong>
              <p>
                Workshops range from 2 hours to half day, to 1 or 2 days in
                duration.
              </p>
              <WomanLeadership buttonLabel={buttonLabelText} />
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
