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
import NetlifyForm from 'react-netlify-form';

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

  submit_form = () => {
    check_webtolead_fields();
  };

  check_webtolead_fields = () => {
    if (document.getElementById('bool_id') != null) {
      var reqs = document.getElementById('bool_id').value;
      bools = reqs.substring(0, reqs.lastIndexOf(';'));
      var bool_fields = new Array();
      var bool_fields = bools.split(';');
      nbr_fields = bool_fields.length;
      for (var i = 0; i < nbr_fields; i++) {
        if (document.getElementById(bool_fields[i]).value == 'on') {
          document.getElementById(bool_fields[i]).value = 1;
        } else {
          document.getElementById(bool_fields[i]).value = 0;
        }
      }
    }
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
            <script
              type="text/javascript"
              src="http://www.svilab.com/crm/cache/include/javascript/sugar_grp1.js?v=eCnBdPO8WsrXBLnPjljGCw"
            />
            <form
              id="WebToLeadForm"
              action="http://www.svilab.com/crm/index.php?entryPoint=WebToPersonCapture"
              method="POST"
              name="WebToLeadForm"
            >
              <div class="row">
                <div class="col">
                  <label>First Name: </label>
                  <input name="first_name" id="first_name" type="text" />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>
                    Last Name: <span class="required">*</span>
                  </label>
                  <input
                    name="last_name"
                    id="last_name"
                    type="text"
                    required=""
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>Email Address: </label>
                  <input name="email1" id="email1" type="email" />
                </div>
              </div>
              <div class="row center buttons">
                <input
                  class="button"
                  name="Submit"
                  type="submit"
                  value="Submit"
                  onclick="submit_form();"
                />
              </div>
              <input
                name="campaign_id"
                id="campaign_id"
                type="hidden"
                value="f6b90821-2902-e64d-3059-5cb3de42aab4"
              />{' '}
              <input
                name="assigned_user_id"
                id="assigned_user_id"
                type="hidden"
                value="1"
              />{' '}
              <input
                name="moduleDir"
                id="moduleDir"
                type="hidden"
                value="Leads"
              />
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MoreInfoModal;
