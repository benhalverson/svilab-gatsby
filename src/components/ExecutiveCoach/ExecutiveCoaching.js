import React, { Fragment } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import ExecutiveCoachingModal from './ExecutiveCoachingModal';

function ExecutiveCoaching() {
  const buttonLabelText = `Send more info`;
  return (
    <Fragment>
      <Button id="ExecutiveCoaching">Operations and Executive Coaching</Button>
      <UncontrolledCollapse toggler="#ExecutiveCoaching">
        <Card>
          <CardBody>
            <div className="card-body">
              <strong>Objectives</strong>
              <p>
                Learn essential skills for new and lesser experienced executives
                such as in startups
              </p>
              <strong>Duration</strong>
              <ul>
                <li>1 to 3 days</li>
              </ul>
              <strong>Who is this workshop for?</strong>
              <ul>
                <li>CEO / co-founders</li>
                <li>Startup executives and senior managers</li>
              </ul>
              <strong>Skills and Topics</strong>
              <ul>
                <li>Make effective budgets & revenue forecasts</li>
                <li>Running effective and brief meetings</li>
                <li>Being an example; acting with integrity </li>
                <li>Set goals, follow up and maintain accountability</li>
                <li>Hiring, team building, culture, conflict and resolution</li>
                <li>Corporate etiquette and body language for leaders </li>
                <li>Corporate governance and working with stakeholders</li>
              </ul>
              <ExecutiveCoachingModal buttonLabel={buttonLabelText} />
              {/* crm needs to be setup for ExecutiveCoachingModal modal */}
            </div>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </Fragment>
  );
}
export default ExecutiveCoaching;
