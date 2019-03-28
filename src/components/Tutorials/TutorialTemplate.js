import React, { Component } from 'react';

import './Tutorials.css';

/**
 * Displays a basic tutorial. 
 * @property title : shows title in h2
 * @property bodyDiv: a div containing the body 
 * @property  mediaDiv: a div containing image or animation
 */
class TutorialTemplate extends Component{


	render() {
		return (
			<div className="fade-in-panel tutorial">
				<div className="tutorial-info">
					<h2>{this.props.title}</h2>	
					{this.props.bodyDiv}
				</div>
				{this.props.mediaDiv}
			</div>
		);
	}
}

export default TutorialTemplate;