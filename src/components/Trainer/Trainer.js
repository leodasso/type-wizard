import React, { Component } from 'react';
import { connect } from 'react-redux';
import Keyboard from '../Keyboard/Keyboard';
import GameStage from '../GameStage/GameStage';
import Header from '../Header/Header';
import GameFocus from '../GameFocus/GameFocus';
import './Trainer.css';

class Trainer extends Component {

	render() {

		return (
			<div>
				<div>
					<Header>Training</Header>
				</div>
				
				<div className="trainer">
					<GameFocus />
					<div className="stage-parent">
						<Keyboard keyboard={this.props.keyboard} ref="keyboard" preview={false}/>
						<GameStage />
					</div>
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
