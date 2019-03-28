import React, { Component } from 'react';
import ImageAnimation from '../ImageAnimation';
import tut1Frame1 from '../../../art/tutorial_1_frame_1.png';
import tut1Frame2 from '../../../art/tutorial_1_frame_2.png';
import tut1Frame3 from '../../../art/tutorial_1_frame_3.png';
import tut1Frame4 from '../../../art/tutorial_1_frame_4.png';

import '../Tutorials.css';

const images = [tut1Frame1, tut1Frame2, tut1Frame3, tut1Frame4, tut1Frame4, tut1Frame4];

class FindBump1 extends Component{


	render() {
		return (
			<div className="fade-in-panel tutorial">
				<div className="tutorial-info">
					<h2>Let's Get Started!</h2>	
					<p>Find the left-most key with a bump on it.</p>
					<p>Place your left index finger on it. Press to continue!</p>
				</div>
				<ImageAnimation images={images} interval={300} />
			</div>
		);
	}
}

export default FindBump1;