import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Splash.css';

class Splash extends Component{

	handleClick= (action) => () => {
		this.props.dispatch({type: action});
	}

	render() {

		return (
			<div className="splash">
				<h1>Hello, welcome to TypeWizard</h1>
				<p>TypeWizard gives you the tools to increase 
					your typing skill for any keyboard layout</p>

				
				<button onClick={this.handleClick('SET_TO_REGISTER_MODE')} 
				className="hero-button">
					Sign Up
				</button>
				<br/>
				<button className="link-button" onClick={this.handleClick('SET_TO_LOGIN_MODE')}>
					Already have an account? Log in.
				</button>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Splash);