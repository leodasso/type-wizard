import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import BodyContainer from '../BodyContainer/BodyContainer';

class Settings extends Component{


	render() {

		return (
			<div>
				<Header>Settings</Header>
				<BodyContainer>
					<p>Hi here's ur Settings</p>
				</BodyContainer>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Settings);