import React, { Component } from 'react';
import { connect } from 'react-redux';
import Keyboard from '../Keyboard/Keyboard';
import GameStage from '../GameStage/GameStage';
import Header from '../Header/Header';
import './Trainer.css';

class Trainer extends Component {

	render() {

		return (
			<div>
				<div>
					<Header>Training</Header>
				</div>
				<div className="trainer">
					<Keyboard keyboard={this.props.keyboard} ref="keyboard" preview={false}/>
					<GameStage />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	enabledKeys: state.ableKeys,
	keyboard: state.keyboard,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Trainer);
