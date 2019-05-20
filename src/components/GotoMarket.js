import React, { Fragment } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import GoToMarketModal from './GotoMarketModal';

function HowToPitch() {
  const buttonLabelText = `Send more info`;
  return (
    <Fragment>
      <Button id="GotoMarket">
        Go-to-Market - with emphasis for B2B companies.
      </Button>
      <UncontrolledCollapse toggler="#GotoMarket">
        <Card>
          <CardBody>
            <div className="card-body">
              <strong>Objective</strong>
              <p>
                Make an effective plan to launch your product to customers and
                grow revenue.
              </p>
              <strong>Duration</strong>
              <ul>
                <li>
                  We provide interactive workshops from 1 or 2 hours or half
                  day, and{' '}
                </li>
                <li>1 to 5-day programs, dependingon your needs and budget</li>
              </ul>
              <strong>What stage of companies is this workshop for?</strong>
              <ul>
                <li>
                  Mid to late seed companies planning first entry to market
                </li>
                <li>Late seed who have a budget</li>
                <li>
                  Series A, when they must grow the customer base and revenue.
                </li>
              </ul>
              <strong>Who is this workshop for?</strong>
              <ul>
                <li>
                  CEO / co-founders - the CEO should be the chief sale rep of
                  the company!
                </li>
                <li>Marketing and Sales VP and managers</li>
                <li>Product Manager</li>
              </ul>
              <strong>Skills and Topics Covered</strong>
              <p>
                <u>This is a big topic.</u> It is the core of most companies
                work. The amount we cover is dependent on the participants stage
                at start and the time we have together. This program may be
                provided every six months because early stage companies change
                as they ramp up activities.
              </p>
              <strong>Customer Validation</strong>
              <ul>
                <li>Prove customer market fit with real customer or survey</li>
                <li>
                  Discover your product value proposition and unique sales
                  proposition, (USP)
                </li>
              </ul>
              <strong>Competition</strong>
              <ul>
                <li>
                  Research competition, features, prices, market position,
                  distribution, key customers and tag lines
                </li>
                <li>
                  Discover your unique sales proposition, (USP), that will win
                  again competition
                </li>
              </ul>
              <strong>Messaging</strong>
              <ul>
                <li>Create your customer persona</li>
                <li>Show problem, solution & benefit, use case, referrals</li>
                <li>Create your product and company messaging using USP</li>
                <li>Set and manage budgets</li>
                <li>Create the sales pipeline</li>
                <li>Set up sales channels</li>
                <li>More</li>
              </ul>
              <strong>Branding and Positioning</strong>
              <ul>
                <li>
                  Find your market niche, create your positioning and brand
                </li>
                <li>Craft your product messaging</li>
                <li>Working with marketing agencies</li>
              </ul>
              <strong>Marketplace</strong>
              <ul>
                <li>Research trase shows & trade associations</li>
                <li>
                  Research market including attainable market size, customers,
                  spend
                </li>
              </ul>
              <strong>Key Metrics</strong>
              <ul>
                <li>
                  Manage metrics: cost of customer acquisition, long term value
                  of customer, conversion rate, sales cycle, customer buying
                  profile and more.{' '}
                </li>
                <li>Manage by tracking objectives, metrics and results</li>
              </ul>
              <strong>Budgets, Operations & Pricing</strong>
              <ul>
                <li>Set up a CRM and marketing system</li>
                <li>Manage the sales pipeline</li>
                <li>Manage your budgets</li>
                <li>Manage pricing, discounts and margins</li>
                <li>Hiring, training and compensation</li>
                <li>Sales and marketing training</li>
                <li>
                  CEO and C-suite support for sales, quality levels and
                  integrity
                </li>
                <li>Licenses, sales contracts and other legal requirements</li>
                <li>Domestic vs international sales</li>
                <li>Data Privacy and security</li>
                <li>Reporting to the Board of Directors</li>
              </ul>
              <strong>Marketing</strong>
              <ul>
                <li>Consumer & B2B</li>
                <li>Use social media & PR to build awareness</li>
                <li>Website, Content management system (CMS), blogs</li>
                <li>
                  Product demos and videos, podcasts and PR, (public relations)
                </li>
                <li>Lead generation & qualifying</li>
                <li>
                  Make it easy to buys online in 5 steps: discover, trial and
                  buy
                </li>
                <li>References</li>
                <li>Sales timelines</li>
                <li>Content, (inbound), marketing</li>
                <li>Social Media</li>
                <li>A/B testing</li>
              </ul>
              <strong>
                Sales Channels, (covered as needed for the participants)
              </strong>
              <ul>
                <li>Sell online vs B2B sales</li>
                <li>Sales cycyle (timeline and sales steps)</li>
                <li>Online, retail, distributors and affiliates</li>
                <li>
                  B2B direct sales, VARs, (value added resellers), distributors
                </li>
                <li>B2B ssales training for face-to-face meetings</li>
                <li>How to demo your product</li>
                <li>Answering objections</li>
              </ul>
              <GoToMarketModal buttonLabel={buttonLabelText} />
            </div>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </Fragment>
  );
}
export default HowToPitch;
