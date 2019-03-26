import React, { Component } from 'react';
import { connect } from 'react-redux';
import Key from '../Key/Key';
import './Keyboard.css';

/** The Keyboard component takes in a keyboard data class, and renders the keyboard on screen.
 * Keyboard data is keyData divided into rows.
 */
class Keyboard extends Component {


	// When the component mounts, add listeners for the keydown and keyup events
	componentDidMount = () => {
		// Set up the event listeners for key up/ keydown
		document.addEventListener('keydown', this.keyDown);
		document.addEventListener('keyup', this.keyUp);
	}

	// listen for shift keys
	keyDown = (event) => {
		if (event.keyCode === 16){
			this.props.dispatch({
				type:'SET_SHIFTED', 
				delta: 1,
			});
		}
	}


	// still listening for shift keys
	keyUp = (event) => {
		if (event.keyCode === 16){
			this.props.dispatch({
				type:'SET_SHIFTED', 
				delta: -1,
			});
		}
	}

	render() {

		// Preview is a boolean - sometimes the keyboard is rendered in preview mode,
		// like for selecting a keyboard layout. In this mode, it is styled differently,
		// and all the keys are enabled
		const preview = this.props.preview;

		// which set of keys to use, and which CSS classes are used to style the keyboard.
		const keyRows = preview ? this.props.keyboard.previewKeyRows : this.props.keyboard.keyRows;
		const keyboardClass = preview ? "keyboard preview" : "keyboard full";
		const keyRowClass = preview ? "keyboard-row row-preview" : "keyboard-row row-full";

		return (
			<div className={keyboardClass}>
				{
					keyRows.map((row, rowIndex) => (
						<div className={keyRowClass} key={rowIndex}>
							{
								row.map((keyData, index) => 
									<Key key={index} myKeyData={keyData} preview={preview}/>
								)
							}
						</div>
					))
				}
			</div>
		)
	}
}


const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps)(Keyboard);