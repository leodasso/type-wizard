import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import BodyContainer from '../BodyContainer/BodyContainer';
import './LevelComplete.css';
import BodyButton from '../BodyButton/BodyButton';
import LevelCard from '../LevelCard/LevelCard';

class LevelComplete extends Component {


	render() {

		return (
			<div className="matte card center-modal">
				<h2>
					Wow u did it
				</h2>
				<div>
					<p>Good job you hit some keys and got some stats</p>
					<p>Keystrokes: 500</p>
					<p>Hits: 343</p>
					<p>Accuracy: 67.54%</p>
					<p>Time: 0:45</p>
=				</div>
				<BodyButton>
					Next
				</BodyButton>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(LevelComplete);