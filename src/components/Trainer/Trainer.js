import React, { Component } from 'react';
import { connect } from 'react-redux';
import Key from '../Key/Key';
import KeyData from '../../classes/keyData';
import './Trainer.css';

//temp list 
const keys = [
	new KeyData(65, 'A', true),
	new KeyData(83, 'S', true),
	new KeyData(68, 'D', true),
	new KeyData(70, 'F', true),
	new KeyData(71, 'G', false),
	new KeyData(72, 'H', false),
	new KeyData(74, 'J', true),
	new KeyData(75, 'K', true),
	new KeyData(76, 'L', true),
	new KeyData(186, ';', false),
]

class Trainer extends Component {

	// When the component mounts, add listeners for the keydown and keyup events
	componentDidMount = () => {
		document.addEventListener('keydown', this.keyDown);

	}

	keyDown = (event) => {
		console.log('key down', event.key, event.keyCode);
	}

	render() {
		return (
			<div>
				<div>
					<h1 >Training!</h1>
				</div>
				<div className="training-area">
					{
						keys.map((keyData, index) => <Key key={index} myKeyData={keyData} />)
					}
				</div>
			</div>
		)
	}
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
	user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Trainer);
