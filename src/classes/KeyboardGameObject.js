import GameObject from "./gameObject";

/** Keyboard game object is associated to a specific key. */
export default class KeyboardGameObject extends GameObject {

	constructor(position, velocity, width, height, color, keyData, lifetime) {
		super(position, velocity, width, height, color, lifetime);
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