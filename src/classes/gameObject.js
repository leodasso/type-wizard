
/** GameObject is the base class for any object that shows up on the stage.
 * It takes care of rendering and motion. Position and Velocity should be 
 * objects with up to 3 coords {x:25, y:45, z:3}. {x:25, y:45} is also acceptable. 
 * Size is an object with 2 coords {w:5, h:10}. Color should be a string, example is
 * 'red' or 'rgb(25, 123, 33)
 */
export default class GameObject {

	// lets the game update loop know that it can remove this object.
	destroyed = false;

	constructor(position, velocity, size, color, lifetime, deathObject) {
		this.position 		= position;
		this.velocity 		= velocity;
		this.size 			= size;
		this.color 			= color;
		this.lifetime 		= lifetime;
		this.deathObject 	= deathObject;
	}

	// Draws the game object for this frame. Requires the context of the 
	// canvas that you want to draw on.
	render = (canvasContext) => {

		canvasContext.fillStyle = this.color;
		canvasContext.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
	}

	/** Updates the movement / physics of this object */
	update (stage) {

		// Set an interval so that speeds are consistent no matter the framrate
		let interval = 1 / stage.fps;

		// count down lifetime
		if (this.lifetime) {
			this.lifetime -= interval;
			if (this.lifetime <= 0) {
				this.destroy(stage);
				return;
			}
		}

		// gravity
		if (this.gravity) {
			this.velocity.z += stage.gravity * interval;
		}

		// velocity
		this.position.x += this.velocity.x * interval;
		this.position.y += this.velocity.y * interval;
		this.position.z += this.velocity.z * interval;


		if (this.bounce) {

			// bounce x
			if (this.position.x + this.size.w > stage.width || this.position.x < 0) {
				this.velocity.x = -this.velocity.x;
				this.onCollision();
			}

			// bounce y
			if (this.position.y + this.size.h > stage.height || this.position.y < 0) {
				this.velocity.y = -this.velocity.y;
				this.onCollision();
			}
		}
	}

	/** Destroys this object. Takes in the array of the game stage, and
	 * removes this object from the array.
	 */
	destroy(stage) {
		this.destroyed = true;
	}

	onCollision() {

	}

}