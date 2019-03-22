import React, { Component } from 'react';
import { connect } from 'react-redux';
import BodyButton from '../BodyButton/BodyButton';
import './KeyboardSelection.css';
import Keyboard from '../Keyboard/Keyboard';

/** This component is for displaying a preview of the keyboard in the 
 * settings screen. Shows a few keys and a button for choosing keyboards.
 * also will indicate if it's currently selected 
 */
class KeyboardSelection extends Component {

	selectKeyboard = layout => () => {
		console.log('selecting ', layout.title);
		this.props.dispatch({
			type:'SET_LAYOUT',
			payload: layout,
		});
	}

	render() {

		const layout = this.props.layout;

		return (
			<div className="keyboard-card">
				<div>{layout.title}</div>
				<div className="keys-preview">
					<Keyboard keyboard={layout} preview={true}/>
				</div>
				<BodyButton>Select</BodyButton>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return {
		level: reduxState.currentLevel,
	};
}

export default connect(mapReduxState)(KeyboardSelection);