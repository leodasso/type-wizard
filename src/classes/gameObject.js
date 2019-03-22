
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
			this.vel_y += stage.gravity * interval;
		}

		// velocity
		this.x += this.vel_x * interval;
		this.y += this.vel_y * interval;


		if (this.bounce) {

			// bounce x
			if (this.x + this.size.w > stage.width || this.x < 0) {
				this.vel_x = -this.vel_x;
				this.onCollision();
			}

			// bounce y
			if (this.y + this.size.h > stage.height || this.y < 0) {
				this.vel_y = -this.vel_y;
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

	onCollision = () => {

	}

}