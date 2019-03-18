import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Key.css';


/**The Key component renders a single key of the on-screen keyboard.
 * It's responsive to key presses for it's given keycode
 */
class Key extends Component{

	state = {
		keyState: 'idle',
		keyCode: 70,
		key: 'F',
	}

	// Each key component is bound to a specific key. This function checks if the 
	// given event is related to that key.
	eventIsThisKey = event => {
		return Number(event.keyCode) === this.state.keyCode;
	}

	// When the component mounts, add listeners for the keydown and keyup events
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyDown);
		document.addEventListener('keyup', this.keyUp);

	}

	keyDown = (event) => {
		if (!this.eventIsThisKey(event)) return;
		console.log('key down', event);
		this.setState({ keyState: 'pressed' });
	}


	keyUp = (event) => {
		if (!this.eventIsThisKey(event)) return;
		console.log('key up', event);
		this.setState({ keyState: 'idle' });
	}



	render() {

		// Set CSS class of key based on if it's pressed or not.
		const keyClass = this.state.keyState !== 'pressed' ? 
			'Key' : 'Key Pressed';

		return (
			<div
				className= {keyClass}
				onKeyDown={this.keyDown}
				onKeyUp={this.keyUp}
			>
				<h3>{this.state.key} </h3>
			</div>
		);
	}
}

export default Key;
