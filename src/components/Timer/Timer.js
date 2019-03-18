import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Timer.css';

let ctx;
let canvas;

/** The Keyboard component takes in a keyboard data class, and renders the keyboard on screen.
 * Keyboard data is keyData divided into rows.
 */
class Timer extends Component {

	state = {
		intervalId: 0,
		time: 45,
		startTime: 45,
	}

	componentDidMount = () => {

		// Update every .1 seconds
		let newInterval = setInterval(this.updateTimer, 100);
		this.setState({intervalId: newInterval});

		// get the canvas context
		let canvas = this.refs.canvas;
		canvas.width = 500;
		canvas.height = 12;
		ctx = canvas.getContext('2d');

		console.log(ctx);
		ctx.fillStyle = 'red';
		ctx.fillRect(1, 1, 400, 10);

		ctx.strokeStyle = 'black';
		ctx.strokeRect(0, 0, canvas.width, canvas.height);

	}

	componentWillUnmount = () => {
		clearInterval(this.state.intervalId);
	}

	progress() {
		return this.state.time / this.state.startTime;
	}
	
	updateTimer = () => {
		let newTime = this.state.time - .1;
		this.setState({time:newTime});

		// clear the canvas
		ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);

		// Draw a new rect
		ctx.fillStyle = 'red';
		let newWidth = this.refs.canvas.width * this.progress();
		ctx.fillRect(1, 1, newWidth, 10);
	}


	render() {
		return (
			<div className="timer">
			<canvas ref="canvas" />
			</div>
		)
	}
}


export default connect()(Timer);