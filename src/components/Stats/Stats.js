import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import BodyContainer from '../BodyContainer/BodyContainer';

class Stats extends Component{


	render() {

		return (
			<div>
				<Header>Stats</Header>
				<BodyContainer>
                	<p>Hi here's ur stats</p>
				</BodyContainer>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Stats);