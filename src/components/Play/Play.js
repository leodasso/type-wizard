import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import levels from '../../data/levels';
import LevelCard from '../LevelCard/LevelCard';
import './Play.css';
import BodyContainer from '../Design/BodyContainer/BodyContainer';

class Play extends Component{

	componentDidMount() {
		// reset the keys reducer. This contains keys that were set from
		// the key components, but we want to hard reset it between
		// play sessions.
		this.props.dispatch({type:'CLEAR_KEYS'});
	}

	render() {

		return (
			<>
			<Header>Play</Header>
			<BodyContainer>
				<div className="level-list">
					{
						levels.map( (level, index) => 
							(<LevelCard key={index} levelData={level()}/> ))
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