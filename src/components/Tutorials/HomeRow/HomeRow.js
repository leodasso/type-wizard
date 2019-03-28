import React, { Component } from 'react';
import TutorialTemplate from '../TutorialTemplate';
import tut2 from '../../../art/tutorial_2.png';

import '../Tutorials.css';

class HomeRow extends Component{


	render() {
		return (
			<TutorialTemplate 
			title={"Fantastic!"}
			bodyDiv={<>
				<p>With those two fingers in place, lay the rest of your fingers down in a row.</p>
				<p>Press all the keys to continue (not at the same time)!</p>
				</>}
			mediaDiv={ <img className="tutorial-image" src={tut2}/>}
			/>
		);
	}
}

export default HomeRow;