import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import BodyContainer from '../BodyContainer/BodyContainer';
import keyboardLayouts from '../../data/keyboard-layouts/layouts';
import BodyButton from '../BodyButton/BodyButton';

class Settings extends Component{


	selectKeyboard = layout => () => {
		console.log('selecting ', layout.title);
		this.props.dispatch({
			type:'SET_LAYOUT',
			payload: layout,
		});
	}

	render() {

		return (
			<div>
				<Header>Settings</Header>
				<BodyContainer>
					{keyboardLayouts.map(layout => 
						<BodyButton 
							key={layout.id} 
							onClick={this.selectKeyboard(layout)}>
							{layout.title}
						</BodyButton>)
					}
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