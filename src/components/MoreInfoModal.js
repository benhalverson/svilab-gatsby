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

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const firstName = document.getElementById('FirstName').value;
  //   const lastName = document.getElementById('LastName').value;
  //   const email = document.getElementById('Email').value;
  //   Axios({
  //     method: 'POST',
  //     url:
  //       process.env.URL ||
  //       'http://localhost:9000/.netlify/functions/FormHandler',
  //     data: {
  //       firstName,
  //       lastName,
  //       email
  //     }
  //   })
  //     .then(response => {
  //       if (response.data.msg === 'success') {
  //         console.log('message sent');
  //         this.resetForm();
  //       }
  //     })
  //     .catch(error => console.error(`Failed to send data ${error}`));
  // };

  // resetForm = () => {
  //   document.getElementById('contact-form').reset();
  // };

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
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              form-name="contact-test"
            >
              <input type="hidden" name="bot-field" />
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" />
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MoreInfoModal;
