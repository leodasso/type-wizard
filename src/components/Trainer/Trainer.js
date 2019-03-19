import React, { Component } from 'react';
import { connect } from 'react-redux';
import Keyboard from '../Keyboard/Keyboard';
import englishUS from '../../data/keyboard-layouts/english-us';
import korean from '../../data/keyboard-layouts/korean';
import GameStage from '../Timer/GameStage';

class Trainer extends Component {

	// // When the component mounts, add listeners for the keydown and keyup events
	// componentDidMount = () => {
	// 	document.addEventListener('keydown', this.keyDown);
	// }

	// // This is just for debugging
	// keyDown = (event) => {
	// 	// console.log('key down', event.key, event.keyCode);
	// }

	updateLevel = () => {

		if (Math.random() <= 1 / 60) {

			// get a random key
			const randomIndex = Math.floor(Math.random() * this.props.enabledKeys.length);
			console.log('monster index:', this.props.enabledKeys[randomIndex]);
		}
	}


	render() {

		return (
			<div>
				<div>
					<h1 >Training!</h1>
				</div>
				<div className="container">
					<Keyboard keyboard={englishUS} ref="keyboard"/>
					<GameStage levelUpdate={this.updateLevel}/>
				</div>
			</div>
		)
	}
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
	user: state.user,
	enabledKeys: state.ableKeys,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Trainer);
