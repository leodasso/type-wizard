import React, { Component } from 'react';
import { connect } from 'react-redux';
import Key from '../Key/Key';
import './Keyboard.css';

/** The Keyboard component takes in a keyboard data class, and renders the keyboard on screen.
 * Keyboard data is keyData divided into rows.
 */
class Keyboard extends Component {

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