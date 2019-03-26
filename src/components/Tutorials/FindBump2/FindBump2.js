import React, { Component } from 'react';
import { connect } from 'react-redux';

class FindBump2 extends Component{


	render() {
		return (
			<div>
                <h2>Great!</h2>
                <p>Now with your right hand, find the other bump.</p>
				<p>Place your right index finger on it. Press to continue!</p>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(FindBump2);