import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class Play extends Component{


	render() {

		return (
			<>
			<Header />
			<div>
                Hi here's ur Play
				<p></p>
			</div>
			</>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Play);