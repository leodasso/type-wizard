import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeRow extends Component{


	render() {
		return (
			<div>
                <h2>Fantastic!</h2>
                <p>With those two fingers in place, lay the rest of your fingers down in a row.</p>
				<p>Destroy the monsters to continue!</p>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(HomeRow);