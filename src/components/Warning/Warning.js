import React, { Component } from 'react';
import warning from '../../icons/warningIcon';
import './Warning.css';


class Warning extends Component{

	render() {

		return (
			<div
				className="warning"
				role="alert"
			>
				<div className="warning-element">
					{warning}
				</div>

				<div className="warning-element">
					{this.props.children}
				</div>
			</div>
		);
	}
}


export default Warning;