import React, { Component } from 'react';
import { connect } from 'react-redux';
import DarkCard from '../Design/DarkCard/DarkCard';
import './Session.css';
import levels from '../../data/levels';

class Session extends Component{

	render() {

		const session = this.props.session;
		const date = new Date(session.session_date);
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

		return (
			<DarkCard className="session-card">
                <h2>LEVEL: {levels[session.level_id].name}</h2>
				<div>
					<p>{date.toLocaleDateString("en-US", options)}</p>
					<p>duration: {session.duration} seconds</p>
					<p>strokes: {session.strokes}</p>
					<p>score: {session.score}</p>
					<p>accuracy: {session.accuracy}%</p>
				</div>

			</DarkCard>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Session);