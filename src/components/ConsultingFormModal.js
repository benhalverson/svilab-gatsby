import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

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
    this.check_webtolead_fields();
  };

  check_webtolead_fields = () => {
    if (document.getElementById('bool_id') != null) {
      const reqs = document.getElementById('bool_id').value;
      const bools = reqs.substring(0, reqs.lastIndexOf(';'));
      let bool_fields = [];
      bool_fields = bools.split(';');
      const nbr_fields = bool_fields.length;
      for (let i = 0; i < nbr_fields; i++) {
        if (document.getElementById(bool_fields[i]).value === 'on') {
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
            Yes! Send me info on Consulting
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
                  <label>
                    First Name: <span class="required">*</span>
                  </label>
                  <input
                    name="first_name"
                    id="first_name"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>
                    Last Name: <span class="required">*</span>
                  </label>
                  <input name="last_name" id="last_name" type="text" required />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>Email Address: </label>
                  <input name="email1" id="email1" type="email" required />
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
                value="e2027caf-eb48-dfd4-22dc-5cb6a5535392"
              />
              <input
                name="redirect_url"
                id="redirect_url"
                type="hidden"
                value="http://svilab.com"
              />
              <input
                name="assigned_user_id"
                id="assigned_user_id"
                type="hidden"
                value="3907b44e-a4de-3e08-eb08-5b14a2f4254f"
              />
              <input
                name="moduleDir"
                id="moduleDir"
                type="hidden"
                value="Leads"
              />
              <input
                name="assigned_user_id"
                id="assigned_user_id"
                type="hidden"
                value="1"
              />
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
