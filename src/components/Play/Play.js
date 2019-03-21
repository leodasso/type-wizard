import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import levels from '../../data/levels';
import LevelCard from '../LevelCard/LevelCard';
import './Play.css';
import BodyContainer from '../BodyContainer/BodyContainer';

class Play extends Component{


	render() {

		return (
			<>
			<Header>Play</Header>
			<BodyContainer>
				<div className="level-list">
					{
						levels.map( (level, index) => 
							(<LevelCard key={index} levelData={level}/> ))
					}
				</div>
			</BodyContainer>
			</>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Play);