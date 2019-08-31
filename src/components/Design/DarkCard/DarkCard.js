import React, { Component } from 'react';
import './DarkCard.css';

class DarkCard extends Component{

	render() {

		// Handle adding more custom classes to this component
		const classes = this.props.className ? "dark-card " + this.props.className : "dark-card";

		return (
			<div className={classes}>
                {this.props.children}
			</div>
		);
	}
}


export default DarkCard;