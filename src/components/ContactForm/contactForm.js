import React, { Component } from 'react';
// import { Form, Text, Scope } from 'informed';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      company: '',
      message: ''
    };
  }

  render() {
    return <div>Form goes here...</div>;
  }
}
