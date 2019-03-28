import React, { Component } from 'react';
import tut1Frame1 from '../../../art/tutorial_1_frame_1.png';
import '../Tutorials.css';

class FindBump1 extends Component{


	render() {
		return (
			<div className="fade-in-panel tutorial">
				<div>
					<h2>Let's Get Started!</h2>	
					<p>Find the left-most key with a bump on it.</p>
					<p>Place your left index finger on it. Press to continue!</p>
				</div>
				<img  className="tutorial-image" src={tut1Frame1}/>
			</div>
		);
	}
}

export default FindBump1;