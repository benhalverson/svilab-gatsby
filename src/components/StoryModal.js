import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Row
} from 'reactstrap';

class StoryModal extends Component {
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

  componentDidMount() {
    const script = document.createElement('script');
    script.src = `src="http://www.svilab.com/crm/cache/include/javascript/sugar_grp1.js?v=eCnBdPO8WsrXBLnPjljGCw`;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }
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
            Yes! Send me info on how to tell a story for impact.
          </ModalHeader>
          <ModalBody>
            <Form
              id="WebToLeadForm"
              action="http://www.svilab.com/crm/index.php?entryPoint=WebToPersonCapture"
              method="POST"
              name="WebToLeadForm"
            >
              <FormGroup row>
                <Label for="first_name" sm={2}>
                  First Name:
                </Label>
                <Col sm={10}>
                  <Input
                    name="first_name"
                    id="first_name"
                    type="text"
                    required
                    className="width"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="last_name" sm={2}>
                  Last Name:
                </Label>
                <Col sm={10}>
                  <Input
                    name="last_name"
                    id="last_name"
                    type="text"
                    required
                    className="width"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="email1" sm={2}>
                  Email:
                </Label>
                <Col sm={10}>
                  <Input
                    name="email1"
                    id="email1"
                    type="email"
                    required
                    className="width"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Row>
                  <Col>
                    <Button
                      color="primary"
                      className="button__position"
                      name="Submit"
                      type="submit"
                      value="Submit"
                      onClick={this.submit_form}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
              {/*
              replace with a hidden values
              
               <input
                name="campaign_id"
                id="campaign_id"
                type="hidden"
                value="35e02d9d-13c5-a3c4-782d-5cb8102d0d66"
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
                value="1"
              />
              <input
                name="moduleDir"
                id="moduleDir"
                type="hidden"
                value="Leads"
              /> */}
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default StoryModal;
