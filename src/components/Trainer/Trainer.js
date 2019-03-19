import React, { Component } from 'react';
import { connect } from 'react-redux';
import Keyboard from '../Keyboard/Keyboard';
import englishUS from '../../data/keyboard-layouts/english-us';
import korean from '../../data/keyboard-layouts/korean';
import GameStage from '../Timer/GameStage';

class Trainer extends Component {

	render() {

		return (
			<div>
				<div>
					<h1 >Training!</h1>
				</div>
				<div className="container">
					<Keyboard keyboard={englishUS} ref="keyboard"/>
					<GameStage />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user,
	enabledKeys: state.ableKeys,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Trainer);
