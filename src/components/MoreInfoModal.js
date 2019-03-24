import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from 'reactstrap';
import Axios from 'axios';
import Link from 'gatsby-link'

class MoreInfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const email = document.getElementById('Email').value;
    Axios({
      method: 'POST',
      url:
        process.env.URL ||
        'http://localhost:9000/.netlify/functions/FormHandler',
      data: {
        firstName,
        lastName,
        email
      }
    })
      .then(response => {
        if (response.data.msg === 'success') {
          console.log('message sent');
          this.resetForm();
        }
      })
      .catch(error => console.error(`Failed to send data ${error}`));
  };

  resetForm = () => {
    document.getElementById('contact-form').reset();
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Yes! Send me info on Corporate Innovation
          </ModalHeader>
          <ModalBody>
  
            <Form
              onSubmit={this.handleSubmit}
              id="contact-form"
              name="corporeateInnovation"
              method="POST"
              data-netlify="true"
            >
              <FormGroup row>
                <Label for="FirstName" sm={2}>
                  First Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="Enter your first Name"
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="LastName" sm={2}>
                  Last Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="LastName"
                    id="LastName"
                    placeholder="Enter your Last Name"
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="Email" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Enter your Email"
                    required
                  />
                </Col>
               
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MoreInfoModal;
