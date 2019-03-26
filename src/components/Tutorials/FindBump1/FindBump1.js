import React, { Component } from 'react';
import { connect } from 'react-redux';

class LevelCard extends Component{


	render() {
		return (
			<div>
                <h2>Let's Get Started!</h2>
                <p>Find the left-most key with a bump on it.</p>
				<p>Place your left index finger on it. Press to continue!</p>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(LevelCard);