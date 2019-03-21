import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LevelCard.css';
import { withRouter } from 'react-router-dom';
import BodyButton from '../BodyButton/BodyButton';

class LevelCard extends Component{

	state = {
		hovered: false,
	}


	onClickPlay = () => {
		console.log('Play!');

		// TODO send level data to reducer
		this.props.dispatch({
			type: 'SET_LEVEL',
			payload: this.props.levelData,
		})


		//  redirect
		this.props.history.push('/play/stage');
		
	}

	onMouseEnter = () => this.setState({hovered: true})
	onMouseExit = () => this.setState({hovered:false})

	render() {

		const levelData = this.props.levelData;
		const cardClass = this.state.hovered ? 'dark-card hover' : 'dark-card';
		const titleClass = this.state.hovered ? 'dark-card-title hover' : 'dark-card-title';

		return (
			<div 
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseExit}
				className={cardClass}>
				<div className={titleClass}>
					<div>{levelData.name}</div>
				</div>
				<div className="dark-card-content">
					<p>{levelData.blurb}</p>
					<p>{levelData.duration} sec</p>
					<br />
					<BodyButton onClick={this.onClickPlay} className={"play-button"}>
						Play
					</BodyButton>
				</div>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default withRouter(connect(mapReduxState)(LevelCard));