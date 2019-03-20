import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameObject from '../../classes/gameObject';
import './GameStage.css';
import KeyboardGameObject from '../../classes/KeyboardGameObject';

/** The Keyboard component takes in a keyboard data class, and renders the keyboard on screen.
 * Keyboard data is keyData divided into rows.
 */
class GameStage extends Component {

	// Timer is intentionally left outside of state so that we aren't
	// re-rendering every time we count down (i.e like 60 times a second)
	timer = 0;
	fps = 60;
	gameObjects = [];
	prevPressedKeys = [];

	state = {
		intervalId: 0,
		ctx: null,
	}

	componentDidMount = () => {

		// Add event listener for when the window is resized
		window.addEventListener('resize', this.onWindowResized);

		// Update based on the FPS
		let newInterval = setInterval(this.update, 1000 / this.fps);
		this.setState({intervalId: newInterval});

		// Get and store the canvas context (used for drawing)
		let canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		this.setState({ctx});

		//Set the canvas dimensions
		this.recalculateCanvasDimensions();

		this.timer = this.props.level.duration;
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



	/** This update runs every frame */
	update = () => {
		// clear the canvas
		this.getContext().clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);

		this.updateTimer();

		this.updateLevel();

		// render every game object
		for (const go of this.gameObjects) {
			if (go.destroyed) continue;
			go.render(this.getContext());
		}
	}

	updateLevel = () => {

		// Every frame, there's a random chance that the monster will appear
		if (Math.random() <= 1 / 60) {
			this.addNewMonster();
		}
	}

	addNewMonster = () => {
		// get a random key
		const randomIndex = Math.floor(Math.random() * this.props.enabledKeys.length);
		const keyInfo = this.props.enabledKeys[randomIndex];

		// Convert the element's coords to canvas coords
		const monsterRect = domToCanvasCoords(this.refs.canvas, keyInfo.element.getBoundingClientRect());
		const newMonster = new KeyboardGameObject(monsterRect.x, monsterRect.y, 0, 0, 50, 50, 'red', keyInfo.keyData);
		this.gameObjects.push(newMonster);
	}

	/** Returns the progress (between 0 and 1) of the current level */
	progress = () => this.timer / this.props.level.duration;

	updateTimer = () => {

		// Update the timer
		this.timer -= (1 / this.fps);

		// Draw a new rect
		this.getContext().fillStyle = 'red';
		let newWidth = this.refs.canvas.width * this.progress();
		this.getContext().fillRect(1, 1, newWidth, 10);
	}

	/** Returns the canvas context, which is used to draw on the canvas. The context
	 * is saved in state when the component mounts, but because setting state
	 * is async, it might not be immediately accessible. This function has a failsafe.
	 */
	getContext = () => {
		return this.state.ctx ? this.state.ctx : this.refs.canvas.getContext('2d');
	}

	render() {

		this.checkKeyStrokes();

		return (
			<div ref="canvasContainer" className="stage-parent" >
				<canvas ref="canvas" className="canvas"/>
			</div>
		)
	}

	// Check if any of the keystrokes land on a monster. Store prev key pressed state
	// so we can determine when to call keydown / keyup events
	checkKeyStrokes = () => {

		for (const keyPress of this.props.pressedKeys) {

			// If the prev state didn't include this key's id, that means this
			// press is new. Call the onKeyPressed function
			if (!this.prevPressedKeys.includes(keyPress.id)) {
				this.onKeyPressed(keyPress);
			}
		}

		// refresh the prev keys state
		this.prevPressedKeys = this.props.pressedKeys.map( keyPress => keyPress.id);

	}

	onKeyPressed(keyPress) {

		for (const go of this.gameObjects) {
			if (!go.keyData) continue;
			if (go.keyData.keyCode === keyPress.id) {
				go.destroy();
			}
		}
		// console.log("Pressed " + keyPress.id);
	}
}

/** Given a canvas DOM element and a rect, converts the rect's coordinates to the
 *  local space of the canvas. This is useful if you have an element's coordinates
 * on the DOM, but you want to render something in the canvas on top of that element.
 */
const domToCanvasCoords = (canvasElement, inputRect) => {
	const canvasRect = canvasElement.getBoundingClientRect();
	return {
		x: inputRect.x - canvasRect.x,
		y: inputRect.y - canvasRect.y,
		left: inputRect.left - canvasRect.left,
		right: inputRect.right - canvasRect.left,
		top: inputRect.top - canvasRect.top,
		bottom: inputRect.bottom - canvasRect.top,
		width: inputRect.width,
		height: inputRect.height,
	}
}

const mapReduxState = reduxState => {
	return {
		pressedKeys: reduxState.pressedKeys,
		level: reduxState.currentLevel,
		enabledKeys: reduxState.ableKeys,
	}
}


export default connect(mapReduxState)(GameStage);