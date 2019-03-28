import GameObject from "./gameObject";
import TextRenderer from "./textRenderer";

/** Keyboard game object is associated to a specific key. */
export default class WordDragon extends GameObject {

	/**
	 * 
	 * @param {object} position object with x, y, z
	 * @param {object} velocity object with x, y, z - pixels per second.
	 * @param {object} size object with w, h width and height size
	 * @param {string} color color string 'red' or 'rgb(5, 2, 6), etc
	 * @param {Number} lifetime lifetime in seconds
	 * @param {function} deathObjectMethod Method which returns a new instance of the death object
	 * @param {function} spriteConstructor Method which returns a new instance of the sprite renderer
	 * @param {string} phrase The phrase on this dragon
	 */
	constructor(position, velocity, size, color, lifetime, deathObjectMethod, spriteConstructor, phrase ) {
		super(position, velocity, size, color, lifetime, deathObjectMethod, spriteConstructor);
		this.gravity = false;
		this.phrase = phrase;
		this.growIn = true;
		this.text = new TextRenderer(true);
	}

	/**  If the player presses the key that this object is sitting on,
	 * this function will be called. The stage is passed into this function
	 * so other objects can be added/removed
	 * */
	newKeyPress = (stage, keyData) => {

		// TODO eventually I want this to drop bombs on the stage if the player makes
		// an incorrect input, damaging the keyboard. For now there's no punishment
		// for making a mistake.

		console.log('lol u typed to a dragon');
	}

	render(ctx) {
		super.render(ctx);

		// render the text for this monster
		const center = this.screenSpacePosition();
		let fontSize = Math.round(32 * this.globalScale);
		const textCoords = { x: center.x, y: center.y + 12 }

		this.text.render(ctx, this.phrase, textCoords, fontSize, 'white' );
		
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