import GameObject from "./gameObject";

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
	 * @param {string} phrase The phrase on this dragon
	 */
	constructor(position, velocity, size, color, lifetime, deathObjectMethod, phrase ) {
		super(position, velocity, size, color, lifetime, deathObjectMethod);
		this.keyData = keyData;
		this.gravity = false;
	}

	/**  If the player presses the key that this object is sitting on,
	 * this function will be called. The stage is passed into this function
	 * so other objects can be added/removed
	 * */
	pressMe = (stage) => {

		// TODO
		//this.destroy(stage);
	}

	render(ctx) {
		super.render(ctx);

		// render the keypress for this monster
		ctx.font = '28px Raleway';
		ctx.textAlign = 'center';
		ctx.fillStyle = 'white';
		const center = this.getCenter();
		ctx.fillText(this.phrase, center.x, center.y + 14);
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