import React, { Component } from 'react';
import { connect } from 'react-redux';
import Keyboard from '../Keyboard/Keyboard';
import englishUS from '../../data/keyboard-layouts/english-us';
import korean from '../../data/keyboard-layouts/korean';
import GameStage from '../Timer/GameStage';
import GameLevel from '../../classes/GameLevel';


class Trainer extends Component {

	testLevel = new GameLevel(1, 5, 60);

	// When the component mounts, add listeners for the keydown and keyup events
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyDown);

	}

	// This is just for debugging
	keyDown = (event) => {
		// console.log('key down', event.key, event.keyCode);
	}

	updateLevel = () => {
		// Update the level
		if (Math.random() <= 1 / 60) {
			console.log('monster');
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
					<GameStage level={this.testLevel} levelUpdate={this.updateLevel}/>
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
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Trainer);
