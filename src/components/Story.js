import React, { Fragment } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function Story() {
  return (
    <Fragment>
      <Button id="story">How to craft and tell your story for impact.</Button>
      <UncontrolledCollapse toggler="#story">
        <Card>
          <CardBody>
            <p>
              Stories sell! People are hard-wired to understand and enjoy
              compelling stories – it’s part of our DNA. Stories tell far more
              than just facts. They engage and entertain us. They move us to
              action. They introduce the heroes we cheer for. Great companies
              have stories. Join this workshop to make your story into action!
            </p>

            <strong>Objectives</strong>
            <p>Participants will learn how to:</p>
            <ul>
              <li>Craft their story with impact</li>
              <li>
                Tell their story using body language, voice and gestures to
                create emotion
              </li>
              <li>Read the audience for mood and interest</li>
              <li>End the story with a call-to-action</li>
            </ul>
            <strong>Duration</strong>
            <ul>
              <li>2 hours, half day, or full day</li>
              <li>
                Can be integrated into the Go-to-Market or B2B Sales Training
                program
              </li>
            </ul>
            <strong>Who is this workshop for?</strong>
            <ul>
              <li>CEO / Co-founders</li>
              <li>Executives</li>
              <li>Head of sales, managers and sales reps</li>
              <li>Head of marketing and marketing manager</li>
              <li>Head of technology</li>
              <li>
                Customer facing persons, i.e., product managers and customer
                service reps
              </li>
            </ul>
            <strong>Topics and skills</strong>
            <ul>
              <li>
                Use the 5-step customer message to frame your story in simple
                steps
              </li>
              <li>
                Find the dramatic angle with emotion and impact - and tell it!
              </li>
              <li>
                Use body language, gestures and voice to heighten the emotions
              </li>
              <li>Engage the listener - why should they care?</li>
              <li>Have a point to the story - what is the outcome you want?</li>
            </ul>
            <a
              className="btn btn-primary btn-lg"
              href="/gotomarket"
              role="button"
            >
              Send more info
            </a>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </Fragment>
  );
}
export default Story;
