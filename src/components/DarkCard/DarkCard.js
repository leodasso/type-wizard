import React, { Component } from 'react';

class DarkCard extends Component{

	render() {

		return (
			<div>
                {this.props.children}
			</div>
		);
	}
}


export default DarkCard;