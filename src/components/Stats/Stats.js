import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import BodyContainer from '../BodyContainer/BodyContainer';
import Session from '../Session/Session';
import './Stats.css';

class Stats extends Component{

	componentDidMount() {
		// fetch the list of sessions
		this.props.dispatch({type: 'FETCH_SESSIONS'});
	}

	render() {

		return (
			<div>
				<Header>Stats</Header>
				<BodyContainer>
					<h3>Hi here's ur stats</h3>
					<div className="stats-list">
						{
							this.props.sessions.map(session => 
								<Session key={session.id} session={session}/>)
						}
					</div>
				</BodyContainer>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Stats);