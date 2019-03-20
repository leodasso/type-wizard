import React, { Component } from 'react';
import { connect } from 'react-redux';

class Play extends Component{


	render() {

		return (
			<div>
                Hi here's ur Play
				<p></p>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Play);