import GameObject from "./gameObject";
import TextRenderer from "./textRenderer";
import calc from "../data/calc";
import Hangul from 'hangul-js';

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
		this.setPhrase(phrase);
		this.growIn = true;
		this.text = new TextRenderer(true);
		this.storedInput =  '';
	}

	setPhrase(phrase) {
		this.phrase = phrase;
		this.disassembledPhrase = Hangul.disassemble(phrase);
		console.log('disassembled phrase:', this.disassembledPhrase);
	}

	/**  If the player presses the key that this object is sitting on,
	 * this function will be called. The stage is passed into this function
	 * so other objects can be added/removed
	 * */
	newKeyPress = (stage, keyPress) => {

		// TODO eventually I want this to drop bombs on the stage if the player makes
		// an incorrect input, damaging the keyboard. For now there's no punishment
		// for making a mistake.

		// compoare the keydata with my current letter
		const letterToCheck = this.disassembledPhrase[0];
		
		const newInput = keyPress.shifted ? keyPress.keyData.getShifted() : keyPress.keyData.key;

		// Check if the press was successful
		if (newInput === letterToCheck) {

			stage.onSuccessfulPress();

			// Remove the first letter from the phrase.
			this.disassembledPhrase.shift();
			this.phrase = Hangul.assemble(this.disassembledPhrase);
			if (this.disassembledPhrase.length < 1) {
				this.destroy(stage);
			}
		}
	}

	randomize(stage) {
		this.setPhrase(calc.randomElementFromArray(stage.wordset));
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
	}
}