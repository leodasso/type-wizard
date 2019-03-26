import React, { Component } from 'react';
import { connect } from 'react-redux';

class LevelCard extends Component{


	render() {
		return (
			<div>
                <h2>Hi im helping</h2>
                <p>Put ur finger on the key with the bump, you ho.</p>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(LevelCard);