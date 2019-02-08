import React, { Component } from 'react';
import { Form, Text, Scope } from 'informed';

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
		return (
			<div>
				<Form id="complex-form">
					<label htmlFor="complex-name"> First name: </label> <Text field="name" id="name" />
					<Scope scope="favorite">
						<label htmlFor="complex-color"> Favorite color: </label>
						<Text field="color" id="complex-color" />
						<label htmlFor="complex-food"> Favorite food: </label> <Text field="food" id="complex-food" />
					</Scope>
					<label htmlFor="complex-friend-0"> Friend 1: </label>
					<Text field="friends[0]" id="complex-friend-0" />
					<label htmlFor="complex-friend-1"> Friend 2: </label>
					<Text field="friends[1]" id="complex-friend-1" />
					<label htmlFor="complex-friend-2"> Friend 3: </label>
					<Text field="friends[2]" id="complex-friend-2" />
					<button type="submit"> Submit </button>
				</Form>
			</div>
		);
	}
}
