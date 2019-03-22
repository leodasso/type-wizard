import React, { Component } from 'react';
import { connect } from 'react-redux';
import DarkCard from '../DarkCard/DarkCard';

class Session extends Component{

	render() {

		return (
			<DarkCard>
                <h2>Hi im a sesh</h2>
			</DarkCard>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Session);