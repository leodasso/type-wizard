import calc from '../data/calc';

/**
 * StageInfo is kept as its own thing so that it can be passed to gameobjects. 
 * GameStage.js creates an instance of this when beginning a sesssion
 */
export default class StageInfo {

	constructor (fps, gravity, gameStageComponent, canvas) {
		this.fps = fps; 				// default 60
		this.gravity = gravity; 		// default 900
		this.occupiedKeys = [];			// Keys that have objects on them
		this.gameObjects = [];
		this.gameStageComponent = gameStageComponent;
		this.canvas = canvas;
		this.wordset = words;
	}

	getSize = () => ({
		w: this.canvas.width,
		h: this.canvas.height,
	})


	onMonsterKilled =(keyData) => {

		// clear monster from occupied keys
		this.occupiedKeys = this.occupiedKeys.filter(key => key !== keyData.keyCode);
	}

	onSuccessfulPress = () => {
		const newScore = this.gameStageComponent.state.score + 1;
		this.gameStageComponent.setState({score:newScore});
	}


	// Dispatches an event with a payload of the tutorial component.
	// The GameFocus component will display the tutorial.
	addTutorialComponent = (tutorial) => {

		this.gameStageComponent.props.dispatch({
			type: 'SET_TUTORIAL',
			payload: tutorial,
		});
	}
	

	beginLevelChapter = chapter => {

		// dispatch action for setting which keys are enabled
		this.gameStageComponent.props.dispatch({
			type: 'SET_KEYS',
			payload: this.gameStageComponent.props.level.getEnabledKeys(),
		});
	}

	/** Adds a new monster on a random available key. 
	 * @returns ref to the new instance that was created
	*/
	addObjectToRandomKey = (spawnFunction) => {

		// Check which keys don't have monster on them
		let possibleKeys = [];
		for (let key of this.gameStageComponent.props.enabledKeys) {

			// We don't want to consider keys for spawning if they already
			// have a monster/some other object on them. We do this by checking 
			// if the occupied keys array includes the enabled key. If it doesnt,
			// then we add the key to possibleKeys.
			if (this.occupiedKeys.includes(key)) continue;
			possibleKeys.push(key);
		}

		// If there are no keys available for spawning, we can just stop here.
		if (possibleKeys.length <= 1) {
			console.log('no keys left to spawn on');
			return;
		}

		// Now we're selecting a random index of the possible keys. Keep in mind,
		// This will still just be a numeric keycode.
		const randomIndex = Math.floor(Math.random() * possibleKeys.length);
		const selectedKeyCode = possibleKeys[randomIndex];
		return this.addObjectOnKey(selectedKeyCode, spawnFunction);
	}



	addObjectOnKey = (keyCode, spawnFunction) => {

		// We now have the key that the monster will be placed on. 
		// we need to mark it as occupied
		if (!this.occupiedKeys.includes(keyCode)) {
			this.occupiedKeys.push(keyCode);
		}
		else{
			// if the keycode was already occupied
			console.log("can't spawn on keycode ", keyCode, "it is already occupied");
			return;
		}

		// We have the numeric keycode we want. It's time to find the keyDiv
		// that matches that keycode, so we can use it to place the monster.
		let keyInfo = undefined;
		for (const keyDiv of this.gameStageComponent.props.keyDivs) {
			if (keyDiv.id === keyCode) {
				keyInfo = keyDiv;
				break;
			}
		}

		// Convert the element's coords to canvas coords
		const spawnRect = calc.domToCanvasCoords(this.canvas, keyInfo.div.getBoundingClientRect());
		const x = spawnRect.x + spawnRect.width / 2;
		const y = spawnRect.y + spawnRect.height / 2;

		// Create a new monster instance, and add it to the stage
		const instance = spawnFunction({x:x, y:y, z:0});
		instance.keyData = keyInfo.keyData;

		// some gameobjects need to do some randomization stuff, that happens here
		instance.randomize && instance.randomize(this);

		this.gameObjects.push(instance);
		return instance;
	}

	newEvent = event => {
		this.gameStageComponent.props.level.processEvent(event);
	}
}

const words = [
	"hello",
	"gravely",
	"sticky",
	"bread",
	"cups",
	"tacos",
	"chair",
	"table",
	"magazine",
	"window",
	"keyboard",
	"wine",
	"shoes",
	"timely",
	"strange",
	"orange",
]