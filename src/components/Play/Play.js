import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import levels from '../../data/levels';
import LevelCard from '../LevelCard/LevelCard';
import './Play.css';

class Play extends Component{


	render() {

		// Create an array from the level data object
		const levelArray = [];
		for (const key in levels) {
			const newLevelData = {
				title: key,
				level: levels[key],
			}
			levelArray.push(newLevelData);
		}

		return (
			<>
			<Header title="PLAY"/>
			<div className="level-list">
				{
					levelArray.map( (level, index) => 
						(<LevelCard key={index} levelData={level}/> ))
				}
			</div>
			</>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Play);