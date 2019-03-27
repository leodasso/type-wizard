import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameStage.css';
import calc from '../../data/calc';
import LevelComplete from '../LevelComplete/LevelComplete';
import Modal from '@material-ui/core/Modal';
import StageInfo from '../../classes/StageInfo';

/**The game stage renders all game objects onto an html canvas */
class GameStage extends Component {

	// Timer is intentionally left outside of state so that we aren't
	// re-rendering every time we count down (i.e like 60 times a second)
	timer = 0;
	prevPressedKeys = [];

	// Stage is passed to level & game object, and mutated by them.
	// It's intentionally left out of state, because it is updated every frame.
	stage = undefined;

	state = {
		sessionUploaded: false,
		intervalId: 0,
		ctx: null,
		keyPresses: 0,
		score: 0,
		complete: false,
	}

	componentDidMount = () => {

		// Add event listener for when the window is resized
		window.addEventListener('resize', this.onWindowResized);

		// Get and store the canvas context (used for drawing)
		let canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		this.setState({ctx});

		// Set the canvas dimensions
		this.recalculateCanvasDimensions();

		this.beginSession();
	}

	componentWillUnmount = () => {

		// Remove the interval
		clearInterval(this.state.intervalId);
		// Remove the event listener for resized window
		window.removeEventListener('resize', this.onWindowResized);
	}



	// Begin a new game session
	beginSession = () => {

		this.stage = new StageInfo(60, 900, this, this.refs.canvas);

		// Reset game events so we don't have the previous 
		// session's info
		this.props.dispatch({type: 'CLEAR_GAME_EVENTS'});

		// Update based on the FPS
		let newInterval = setInterval(this.update, 1000 / this.stage.fps);
		this.setState({intervalId: newInterval});

		// dispatch action for setting which keys are enabled
		this.props.dispatch({
			type: 'SET_KEYS',
			payload: this.props.level.getEnabledKeys(),
		});
	}

	onWindowResized = () => {
		this.recalculateCanvasDimensions();
	}

	/**If the window is resized, this function should be called. It finds 
	 * the width and height of the canvas's parent container, and sets the canvas
	 * width and height.. */
	recalculateCanvasDimensions = () => {
		if (!this.refs.canvas) return;
		this.refs.canvas.width = this.refs.canvasContainer.getBoundingClientRect().width;
		this.refs.canvas.height = this.refs.canvasContainer.getBoundingClientRect().height;
	}

	/** This update runs every frame */
	update = () => {		

		// clear the canvas
		this.clearCanvas();

		// Update the current level
		this.props.level.update(this.stage);

		// check if the current level is complete
		if (this.props.level.complete) {
			this.onLevelComplete();
			return;
		}

		// this.updateTimer();
		this.checkKeyStrokes();

		// render game object shadows
		this.getContext().globalAlpha = .5;
		for (const go of this.stage.gameObjects) {
			if (go.destroyed) continue;
			go.renderShadow(this.getContext());
		}

		// render every game object
		// Sort the objects by height so that higher up objects render on top of others
		this.stage.gameObjects.sort((a, b) => a.position.z - b.position.z);
		this.getContext().globalAlpha = 1;
		for (const go of this.stage.gameObjects) {
			if (go.destroyed) continue;
			
			go.update(this.stage);
			go.render(this.getContext());
		}

		// clear out destroyed gameobjects from the list
		this.stage.gameObjects = this.stage.gameObjects.filter(gameObject => !gameObject.destroyed);
	}

	clearCanvas = () => {
		if (!this.refs.canvas) return;
		this.getContext().clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
	}

	onLevelComplete = () => {

		clearInterval(this.state.intervalId);
		this.setState({complete: true});
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
			<>
			<Modal
				open={this.state.complete}
				>
				<LevelComplete
					level={this.props.level}
					strokes={this.state.keyPresses}
					score={this.state.score}
					accuracy={this.getAccuracy()}/>
			</Modal>
			<div>
				<div ref="canvasContainer" className="stage-parent" >
					<canvas ref="canvas" className="canvas"/>
				</div>
				<p>Score: {this.state.score}</p>
				<p>Key Presses: {this.state.keyPresses}</p>
				<p>Accuracy: {this.getAccuracy() + '%'}</p>
			</div>
			</>
		)
	}

	getAccuracy = () => {
		if (this.state.keyPresses <= 0) return 0;
		return ((this.state.score / this.state.keyPresses) * 100).toFixed(2);
	}

	// Check if any of the keystrokes land on a monster. Store prev key pressed state
	// so we can determine when to call keydown / keyup events
	checkKeyStrokes = () => {

		if (this.state.complete) return;

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

	/**
	 * Called when a key is pressed - Dispatches press event, and calls
	 * press on gameobjects which are listening for this press's keycode
	 * @param {Object} keyPress The object which contains the data for the pressed key
	 */
	onKeyPressed(keyPress) {
		// send event to redux
		this.props.dispatch({
			type: 'ADD_EVENT',
			payload: {
				event: 'press',
				time: this.timer,
			}
		})

		// Create the event object and send it to the level for processing
		this.props.level.processEvent({
			type: 'press',
			key: keyPress,
		});

		// count the key press
		const newCount = this.state.keyPresses + 1;
		this.setState({keyPresses:newCount});

		// Send relevant key presses to the game objects - some of them are listening
		// for key press events!
		for (const go of this.stage.gameObjects) {
			// If the game object doesn't support key presses, just continue
			if (!go.pressMe) continue;
			if (go.keyData.keyCode === keyPress.id) {
				go.pressMe(this.stage);
			}
		}
	}
}



const mapReduxState = reduxState => {
	return {
		pressedKeys: reduxState.pressedKeys,
		level: reduxState.currentLevel,
		enabledKeys: reduxState.ableKeys,
		keyDivs: reduxState.keyDivs,
	}
}


export default connect(mapReduxState)(GameStage);