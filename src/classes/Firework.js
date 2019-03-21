export default class GameObject {

	// lets the game update loop know that it can remove this object.
	destroyed = false;

	constructor(position, velocity, width, height, color, lifetime, deathObject) {
		this.position = position;
		this.velocity = velocity;
		this.width = width;
		this.height = height;
		this.color = color;
		this.lifetime = lifetime;
		this.deathObject = deathObject;
	}

	// Draws the game object for this frame. Requires the context of the 
	// canvas that you want to draw on.
	render = (canvasContext) => {

		canvasContext.fillStyle = this.color;
		canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update = (stage) => {

		// console.log('updating', this);

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
			if (this.x + this.width > stage.width || this.x < 0) {
				this.vel_x = -this.vel_x;
				this.onCollision();
			}

			// bounce y
			if (this.y + this.height > stage.height || this.y < 0) {
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