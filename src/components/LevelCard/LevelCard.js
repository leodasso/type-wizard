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

		// TODO maybe restructure level data???

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
					<div>{levelData.title}</div>
				</div>
				<div className="dark-card-content">
					
					<p>{levelData.level.duration} sec</p>
					<BodyButton onClick={this.onClickPlay}>
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