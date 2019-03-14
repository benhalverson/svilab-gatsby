import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import Axios from 'axios';

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
      url: process.env.URL || 'http://localhost:3000/send',
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
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Corporate Innovation</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit} id="contact-form">
              <FormGroup>
                <Label for="FirstName">First Name</Label>
                <Input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  placeholder="Enter your first Name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="LastName">Last Name</Label>
                <Input
                  type="text"
                  name="LastName"
                  id="LastName"
                  placeholder="Enter your last name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Enter your email"
                  required
                />
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
