import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameFocus.css';

class GameFocus extends Component{

	render() {

		return (
			<div className="game-focus">
                Hi i help u with thing
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(GameFocus);