import React, { Component } from 'react';
import './Center.css'
/** Uses CSS grid to place the children centered horiziontally and vertically. */
class Center extends Component {

	render() {
		return (
			<div className="center-grid">
				<div className="center-area">
					{this.props.children}
				</div>
			</div>
		);
	}
}


export default Center;