import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component{


	render() {

		return (
			<div>
                Hi here's ur stats
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Stats);