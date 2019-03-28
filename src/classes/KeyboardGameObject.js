import GameObject from "./gameObject";
import calc from "../data/calc";

/** Keyboard game object is associated to a specific key. */
export default class KeyboardGameObject extends GameObject {

	/**
	 * 
	 * @param {object} position object with x, y, z
	 * @param {object} velocity object with x, y, z - pixels per second.
	 * @param {object} size object with w, h width and height size
	 * @param {string} color color string 'red' or 'rgb(5, 2, 6), etc
	 * @param {Number} lifetime lifetime in seconds
	 * @param {function} deathObjectMethod Method which returns a new instance of the death object
	 * @param {object} keyData The data for the key that this monster is sitting on
	 */
	constructor(position, velocity, size, color, lifetime, deathObjectMethod, keyData, spriteConstructor) {
		super(position, velocity, size, color, lifetime, deathObjectMethod, spriteConstructor);
		this.keyData = keyData;
		this.textOffset = {x: 0, y:0};
		this.textOffsetFrames = 0;
		this.growIn = true;
	}

	/**  If the player presses the key that this object is sitting on,
	 * this function will be called. The stage is passed into this function
	 * so other objects can be added/removed
	 * */
	pressMe = (stage) => {
		this.destroy(stage);
	}

	render(ctx) {
		super.render(ctx);

		// render the text for this monster
		// make the text jiggle every few frames
		this.textOffsetFrames++;
		if (this.textOffsetFrames > calc.randomRange(7, 15)){
			this.textOffset = {
				x: calc.randomRange(-2, 2),
				y: calc.randomRange(-2, 2),
			};
			this.textOffsetFrames = 0;
		}

		const center = this.screenSpacePosition();
		let fontSize = Math.round(28 * this.globalScale);
		ctx.font =  fontSize + 'px Raleway';
		ctx.textAlign = 'center';
		ctx.fillStyle = 'white';
		ctx.fillText(this.keyData.key, center.x + this.textOffset.x, center.y + 12 + this.textOffset.y);
	}

	destroy(stage) {
		super.destroy(stage);

		// send an event to the stage that this was destroyed
		stage.newEvent({
			type: 'death',
			payload: this,
		})
		
		stage.onMonsterKilled(this.keyData);
	}

}