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
  FormText
} from 'reactstrap';

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
            <Form>
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
                  id="Last Name"
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
