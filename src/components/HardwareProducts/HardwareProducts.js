import React, { Fragment } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import HardwareProductsModal from './HardwareProductsModal';
function HardwareProducts() {
  const buttonLabelText = `Send more info`;
  return (
    <Fragment>
      <Button id="HarwareProducts">
        Taking Hardware and IoT Products to Market
      </Button>
      <UncontrolledCollapse toggler="#HarwareProducts">
        <Card>
          <CardBody>
            <div className="card-body">
              <strong>Objective</strong> make an effective plan to launch your
              hardware and IoT product to customers and grow revenue.
              <strong>Duration</strong>
              <ul>
                <li>
                  We provide interactive workshops from 1 or 2 hours or half
                  day, and
                </li>
                <li>
                  1 to 5-day programs, depending on your needs and budget.
                </li>
              </ul>
              <strong>What stage of companies is this workshop for?</strong>
              <ul>
                <li>
                  Mid to late seed companies planning first entry to market
                </li>
                <li>Late seed who have a budget</li>
                <li>Series A, when they scale up.</li>
              </ul>
              <strong>Who is this workshop for?</strong>
              <ul>
                <li>
                  CEO / co-founders – the CEO should be the chief sales rep of
                  the company!
                </li>
                <li>Marketing and Sales VP and managers</li>
                <li>Product Manager</li>
                <li>Head of Engineering, QA, Customer Service</li>
              </ul>
              <strong>Skills and Topics Covered</strong>
              <ul>
                <li>
                  Understand IOT hardware challenges with costs, long
                  time-lines, supply chains and inventory
                </li>
                <li>
                  Plan the customer validation with engineering design and
                  design for manufacturing
                </li>
                <li>
                  Where possible, get a customer early in the process to guide
                  input
                </li>
                <li>
                  Outsource vs. build in-house. Maximize results and lower costs
                  and risks
                </li>
                <li>
                  Pricing, discounts and margins – you must get your multiples
                </li>
                <li>Manage the timeline realistically</li>
                <li>Avoid and recover from problems</li>
                <li>Set expectations for stake holders</li>
                <li>Three traps to avoid</li>
                <li>Use the 5-step customer message to tell your story</li>
                <li>Get a use case and customer testimonial</li>
                <li>Make customer video demos – show off!</li>
                <li>Make a product data sheet. Freeze the product </li>
              </ul>
              <HardwareProductsModal buttonLabel={buttonLabelText} />
              {/* crm needs to be setup for hardwareproduct modal */}
            </div>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </Fragment>
  );
}
export default HardwareProducts;
