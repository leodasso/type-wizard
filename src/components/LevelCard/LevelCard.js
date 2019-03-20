import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LevelCard.css';

class LevelCard extends Component{

	render() {

		const levelData = this.props.levelData;

		return (
			<div className="dark-card">
				<div className="dark-card-content">
					<h3>{levelData.title}</h3>
					<p>{levelData.duration}</p>
					<button>Play</button>
				</div>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(LevelCard);