import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

class VideoModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}

	toggle = () => {
		this.setState((prevState) => ({
			modal: !prevState.modal
		}));
	};
	render() {
		return (
			<div>
				<Button color="primary" onClick={this.toggle}>
					{this.props.buttonLabel}
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalBody>
						<VideoPlayer></VideoPlayer>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default VideoModal;
