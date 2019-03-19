import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Timer.css';

// let ctx;

/** The Keyboard component takes in a keyboard data class, and renders the keyboard on screen.
 * Keyboard data is keyData divided into rows.
 */
class Timer extends Component {

	state = {
		intervalId: 0,
		time: 90,
		startTime: 90,
		ctx: null,
	}

	componentDidMount = () => {

		// Add event listener for when the window is resized
		window.addEventListener('resize', this.onWindowResized);

		// Update every .1 seconds
		let newInterval = setInterval(this.update, 100);
		this.setState({intervalId: newInterval});

		// Get and store the canvas context (used for drawing)
		let canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		this.setState({ctx});

		//Set the canvas dimensions
		this.recalculateCanvasDimensions();

	}

	componentWillUnmount = () => {

		clearInterval(this.state.intervalId);

		// Remove the event listener for resized window
		window.removeEventListener('resize', this.onWindowResized);
	}

	onWindowResized = () => {
		this.recalculateCanvasDimensions();
	}

	/**If the window is resized, this function should be called. It finds 
	 * the width and height of the canvas's parent container, and sets the canvas
	 * width and height.. */
	recalculateCanvasDimensions = () => {

		this.refs.canvas.width = this.refs.canvasContainer.getBoundingClientRect().width;
		this.refs.canvas.height = this.refs.canvasContainer.getBoundingClientRect().height;
	}

	progress() {
		return this.state.time / this.state.startTime;
	}

	update = () => {

		// Update the timer
		let newTime = this.state.time - .1;
		this.setState({time:newTime});

		// clear the canvas
		this.getContext().clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);

		// Draw a new rect
		this.getContext().fillStyle = 'red';
		let newWidth = this.refs.canvas.width * this.progress();
		this.getContext().fillRect(1, 1, newWidth, this.refs.canvas.height);

		this.getContext().strokeStyle = 'black';
		this.getContext().strokeRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
	}

	/** Returns the canvas context, which is used to draw on the canvas. The context
	 * is saved in state when the component mounts, but because setting state
	 * is async, it might not be immediately accessible. This function has a failsafe.
	 */
	getContext = () => {
		return this.state.ctx ? this.state.ctx : this.refs.canvas.getContext('2d');
	}

	render() {
		return (
			<div className="timer" ref="canvasContainer">
				<canvas ref="canvas" className="canvas"/>
			</div>
		)
	}
}


export default connect()(Timer);