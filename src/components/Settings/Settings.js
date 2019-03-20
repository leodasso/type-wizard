import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component{


	render() {

		return (
			<div>
                Hi here's ur Settings
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Settings);