import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class Play extends Component{


	render() {

		return (
			<>
			<Header title="PLAY"/>
			<div>
				
			</div>
			</>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Play);