import GameObject from "./gameObject";

/** Keyboard game object is associated to a specific key. */
export default class KeyboardGameObject extends GameObject {

	constructor(position, velocity, width, height, color, keyData) {
		super(position, velocity, width, height, color);
		this.keyData = keyData;
	}

	/**  If the player presses the key that this object is sitting on,
	 * this function will be called. The stage is passed into this function
	 * so other objects can be added/removed
	 * */
	pressMe = (stage) => {
		this.destroy(stage);
	}


}