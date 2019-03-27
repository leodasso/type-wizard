import GameObject from "./gameObject";

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
	constructor(position, velocity, size, color, lifetime, deathObjectMethod, keyData ) {
		super(position, velocity, size, color, lifetime, deathObjectMethod);
		this.keyData = keyData;
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

		// render the keypress for this monster
		ctx.font = '28px Raleway';
		ctx.textAlign = 'center';
		ctx.fillStyle = 'white';
		const center = this.getCenter();
		ctx.fillText(this.keyData.key, center.x, center.y + 14);
	}

	destroy(stage) {
		super.destroy(stage);
		stage.onMonsterKilled(this.keyData);
	}

}