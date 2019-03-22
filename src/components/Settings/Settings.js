import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import BodyContainer from '../BodyContainer/BodyContainer';
import KeyboardSelection from '../KeyboardSelection/KeyboardSelection';
import './Settings.css';

// The array of keyboards
import keyboardLayouts from '../../data/keyboard-layouts/layouts';

class Settings extends Component{




	render() {

		return (
			<div>
				<Header>Settings</Header>
				<BodyContainer>
					<h3>Select a Keyboard</h3>
					<div className="keyboard-list">
						{keyboardLayouts.map(layout => 

							<KeyboardSelection 
								key={layout.id}
								layout={layout}
							/>
						)}
					</div>
					<p>Hi here's ur Settings</p>
				</BodyContainer>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Settings);