import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LevelCard.css';

class LevelCard extends Component{

	state = {
		hovered: false,
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
					<button className="body-button">Play</button>
				</div>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(LevelCard);