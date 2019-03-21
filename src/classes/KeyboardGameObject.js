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

	destroy(stage) {
		super.destroy(stage);
		const deathObject = new GameObject(this.position, this.velocity, 60, 60, 'blue', 2);
		stage.gameObjects.push(deathObject);
	}

}