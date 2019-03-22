import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LevelComplete.css';
import BodyButton from '../BodyButton/BodyButton';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class LevelComplete extends Component {



	componentDidMount() {
		console.log('hi level done from levelcomplete thing');
		this.uploadSession();
	}

	uploadSession = () => {

		console.log(this.props.user);

		const sesion = {
			userId: this.props.user.id,
			levelId: this.props.level.id,
			duration: this.props.level.duration,
			strokes: this.props.strokes,
			score: this.props.score,
			accuracy: this.props.accuracy,
		}

		axios.post('/api/session', sesion)
		.then(() => {
			console.log('yay post worked')
		})
		.catch(error => {
			console.log('Error posting', error)
		});
	}

	onClickNext = () => {
		this.props.history.push('/play');
	}

	render() {

		return (
			<div className="matte card center-modal">
				<h2>
					Level Complete!
				</h2>
				<div>
					<p>Good job you hit some keys and got some stats</p>
					<p>Keystrokes: {this.props.strokes}</p>
					<p>Score: {this.props.score}</p>
					<p>Accuracy: {this.props.accuracy} %</p>
					<p>Time: {this.props.level.duration}</p>
				</div>
				<BodyButton onClick={this.onClickNext}>
					Next
				</BodyButton>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default withRouter(connect(mapReduxState)(LevelComplete));