import React, { Component } from 'react';
import { connect } from 'react-redux';
import Center from '../Design/Center/Center';
import DarkCard from '../Design/DarkCard/DarkCard';
import BodyButton from '../Design/BodyButton/BodyButton';

import TextField from '@material-ui/core/TextField';
import Neon from '../Design/Neon/Neon';
import Warning from '../Warning/Warning';

class LoginPage extends Component {
	state = {
		username: '',
		password: '',
	};

	login = (event) => {
		event.preventDefault();

		if (this.state.username && this.state.password) {
			this.props.dispatch({
				type: 'LOGIN',
				payload: {
					username: this.state.username,
					password: this.state.password,
				},
			});
		} else {
			this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
		}
	} // end login

	handleInputChangeFor = propertyName => (event) => {
		this.setState({
			[propertyName]: event.target.value,
		});
	}

	render() {
		return (
			<Center>
				<DarkCard className="log-in-card">
					{this.props.errors.loginMessage && (
						<Warning>
							{this.props.errors.loginMessage}
						</Warning>
					)}


					<form onSubmit={this.login}>
						<Neon>Welcome Back!</Neon>
						<div className="log-in-input">
							<TextField
									type="text"
									label="username"
									value={this.state.username}
									fullWidth
									onChange={this.handleInputChangeFor('username')}
								/>
						</div>
						<div className="log-in-input">
							<TextField
									type="password"
									label="password"
									fullWidth
									value={this.state.password}
									onChange={this.handleInputChangeFor('password')}
								/>
						</div>
						<div className="log-in-input">
							<center>
								<BodyButton>
									Login
								</BodyButton>
							</center>
						</div>
					</form>
					<br/>
					<br/>
					<br/>


					<center>
						<button
							type="button"
							className="link-button"
							onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
						>
							Don't have an account? Register.
						</button>
					</center>
				</DarkCard>
			</Center>
		);
	}
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
	errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
