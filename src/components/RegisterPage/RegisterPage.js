import React, { Component } from 'react';
import {connect} from 'react-redux';
import DarkCard from '../DarkCard/DarkCard';
import Center from '../Center/Center';
import BodyButton from '../BodyButton/BodyButton';

// Material UI
import TextField from '@material-ui/core/TextField';
import Neon from '../Design/Neon/Neon';


class RegisterPage extends Component {
	state = {
		username: '',
		password: '',
	};

	registerUser = (event) => {
		event.preventDefault();

		if (this.state.username && this.state.password) {
			this.props.dispatch({
				type: 'REGISTER',
				payload: {
					username: this.state.username,
					password: this.state.password,
				},
			});
		} else {
			this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
		}
	} // end registerUser

	handleInputChangeFor = propertyName => (event) => {
		this.setState({
			[propertyName]: event.target.value,
		});
	}

	render() {
		return (
			<Center>
				<DarkCard className="log-in-card">

				{this.props.errors.registrationMessage && (
					<div
						className="alert"
						role="alert"
					>
						{this.props.errors.registrationMessage}
					</div>
				)}

				<form onSubmit={this.registerUser}>
					<Neon>Sign Up</Neon>
					<div className="log-in-input">
							<TextField
								type="text"
								label="username"
								fullWidth
								value={this.state.username}
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
								Register
							</BodyButton>
						</center>
						<br/>
					</div>
				</form>

				<br/>
				<br/>

				<center>
					<button
						type="button"
						className="link-button"
						onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
					>
						Already have an account? Login.
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

export default connect(mapStateToProps)(RegisterPage);

