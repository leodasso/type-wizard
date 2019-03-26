import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Key.css';


/**The Key component renders a single key of the on-screen keyboard.
 * It's responsive to key presses for it's given keycode
 */
class Key extends Component {

	constructor(props) {

		super(props);
		// Create a ref to store the key div element 
		this.keyDiv = null;

		// Function for storing the reference to the DOM node for this key
		this.setDivRef = element => {
			if (!element) return;
			this.keyDiv = element;
		}

		this.state = {
			keyState: 'idle',
		}
	}


	// Each key component is bound to a specific key. This function checks if the 
	// given event is related to that key.
	eventIsThisKey = event => Number(event.keyCode) === this.props.myKeyData.keyCode;

	// When the component mounts, add listeners for the keydown and keyup events
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyDown);
		document.addEventListener('keyup', this.keyUp);
	}

	componentWillUnmount = () => {
		document.removeEventListener('keydown', this.keyDown);
		document.removeEventListener('keyup', this.keyUp);
	}

	keyDown = (event) => {

		// Ignore events that don't have to do with this key
		if ( !this.eventIsThisKey(event) ) 				return;
		// If the key is enabled or in preview mode, we can continue with the event
		if ( !this.isEnabled() && !this.props.preview ) return;

		this.setState({ keyState: 'pressed' });

		// dispatch an event with the key info
		this.props.dispatch({
			type: 'KEY_PRESSED',
			payload: {
				id: this.props.myKeyData.keyCode,
				keyData: this.props.myKeyData,
				rect: this.keyDiv.getBoundingClientRect(),
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
		// console.log(this.props.enabledKeys, this.props.myKeyData.keyCode);
		return this.props.enabledKeys.includes(this.props.myKeyData.keyCode);
	}

	updateKeydivReducer = () => {

		if (this.isEnabled()) {
			// Dispatch an event with this key's data.
			// This is so the game stage has the coordinates of this key
			// and can place monsters on it.
			this.props.dispatch({
				type:'ENABLE_KEY_DIV',
				payload: {
					id: this.props.myKeyData.keyCode,
					keyData: this.props.myKeyData,
					div: this.keyDiv,
				},
			})

		}else {
			this.props.dispatch({
				type:'DISABLE_KEY_DIV',
				keyCode: this.props.myKeyData.keyCode,
			});
		}

	}

	render() {

		// Set CSS class of key based on if it's pressed or not.
		var keyClass = this.state.keyState !== 'pressed' ? 
			'key' : 'key pressed';

		// override class for disabled keys
		if (!this.isEnabled() && !this.props.preview) {
			keyClass = 'key disabled'
		}

		return (
			<div
				ref={this.setDivRef}
				className= {keyClass}
				onKeyDown={this.keyDown}
				onKeyUp={this.keyUp}
			>
				<div className="key-text">{
					this.props.shifted ? this.props.myKeyData.getShifted() : this.props.myKeyData.key
				} </div>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return {
		level: reduxState.currentLevel,
		shifted: reduxState.shifted,
		enabledKeys: reduxState.ableKeys,
	};
}

export default connect(mapReduxState)(Key);