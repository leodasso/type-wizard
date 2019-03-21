import React, { Component } from 'react';
import { connect } from 'react-redux';
import Keyboard from '../Keyboard/Keyboard';
import GameStage from '../GameStage/GameStage';
import Header from '../Header/Header';
import './Trainer.css';

import englishUS from '../../data/keyboard-layouts/english-us';
import korean from '../../data/keyboard-layouts/korean';

class Trainer extends Component {

	render() {

		return (
			<div>
				<div>
					<Header>Training</Header>
				</div>
				<div className="trainer">
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
