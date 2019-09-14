import React, { Component } from 'react';
import { connect } from 'react-redux';
import BodyButton from '../Design/BodyButton/BodyButton';
import './KeyboardSelection.css';
import Keyboard from '../Keyboard/Keyboard';

/** This component is for displaying a preview of the keyboard in the 
 * settings screen. Shows a few keys and a button for choosing keyboards.
 * also will indicate if it's currently selected 
 */
class KeyboardSelection extends Component {

	selectKeyboard = () => {

		// dispatch to server
		this.props.dispatch({
			type: 'SET_KB',
			payload: this.props.layout,
		})
	}

	componentDidMount = () => {

		this.props.dispatch({type: 'FETCH_KB'});
	}

	render() {

		const layout = this.props.layout;

		console.log('selected layout id is now: ' + this.props.keyboard);

		const selectedClass = this.props.keyboard.id === layout.id ? " selected" : "";

		return (
			
			<div 
				className={"keyboard-card" + selectedClass}
				onClick={this.selectKeyboard}>
					
				<div className={"keyboard-title" + selectedClass}>
					{layout.title}
				</div>

				<Keyboard keyboard={layout} preview={true}/>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return {
		keyboard: reduxState.keyboard,
	};
}

export default connect(mapReduxState)(KeyboardSelection);