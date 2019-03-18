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
		document.addEventListener('keydown', this.keyDown);
		document.addEventListener('keyup', this.keyUp);

	}

	// listen for shift keys
	keyDown = (event) => {
		if (event.keyCode == 16){
			this.props.dispatch({
				type:'SET_SHIFTED', 
				delta: 1,
			});
		}
	}


	// still listening for shift keys
	keyUp = (event) => {
		if (event.keyCode == 16){
			this.props.dispatch({
				type:'SET_SHIFTED', 
				delta: -1,
			});
		}
	}

	render() {
		return (
			<div className="keyboard">
				{
					this.props.keyboard.keyRows.map((row, rowIndex) => (
						<div className="keyboard-row" key={rowIndex}>
							{
								row.map((keyData, index) => 
									<Key key={index} myKeyData={keyData} />
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