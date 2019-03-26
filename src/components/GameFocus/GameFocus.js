import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameFocus.css';

class GameFocus extends Component{

	render() {

		return (
			<div className="game-focus">
                {this.props.tutorial}
			</div>
		);
	}
}

const mapReduxState = reduxState => (
{
	tutorial: reduxState.currentTutorial,
})

export default connect(mapReduxState)(GameFocus);