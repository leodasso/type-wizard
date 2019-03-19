import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Key.css';


/**The Key component renders a single key of the on-screen keyboard.
 * It's responsive to key presses for it's given keycode
 */
class Key extends Component{

	state = {
		keyState: 'idle',
	}

	// Each key component is bound to a specific key. This function checks if the 
	// given event is related to that key.
	eventIsThisKey = event => {
		return Number(event.keyCode) === this.props.myKeyData.keyCode;
	}

	// When the component mounts, add listeners for the keydown and keyup events
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyDown);
		document.addEventListener('keyup', this.keyUp);

	}

	keyDown = (event) => {
		if (!this.eventIsThisKey(event) || !this.isEnabled()) return;
		this.setState({ keyState: 'pressed' });

		// dispatch an event with the key info
		this.props.dispatch({
			type: 'KEY_PRESSED',
			payload: {
				id: this.props.myKeyData.keyCode,
				keyData: this.props.myKeyData,
				rect: this.refs.keyDiv.getBoundingClientRect(),
			},
		})
	}


	keyUp = (event) => {
		if (!this.eventIsThisKey(event)) return;
		this.setState({ keyState: 'idle' });

		// dispatch an event with the key info
		this.props.dispatch({
			type: 'KEY_RELEASED',
			id: this.props.myKeyData.keyCode,
		})
	}


	isEnabled() {
		return this.props.ableKeys.includes(this.props.myKeyData.keyCode);
	}

	render() {

		// Set CSS class of key based on if it's pressed or not.
		var keyClass = this.state.keyState !== 'pressed' ? 
			'Key' : 'Key pressed';

		// override class for disabled keys
		if (!this.isEnabled()) {
			keyClass = 'Key disabled'
		}

		return (
			<div
				ref="keyDiv"
				className= {keyClass}
				onKeyDown={this.keyDown}
				onKeyUp={this.keyUp}
			>
				<h3>{
					this.props.shifted ? this.props.myKeyData.getShifted() : this.props.myKeyData.key
				} </h3>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return {
		ableKeys: reduxState.ableKeys,
		shifted: reduxState.shifted,
	};
}

export default connect(mapReduxState)(Key);
