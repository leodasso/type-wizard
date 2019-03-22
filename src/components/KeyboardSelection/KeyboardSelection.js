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
				<div className="keyboard-title">{layout.title}</div>
				<Keyboard keyboard={layout} preview={true}/>
				<div className="keyboard-card-body">
					<BodyButton 
						className="select-button">
						Select
					</BodyButton>
				</div>
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