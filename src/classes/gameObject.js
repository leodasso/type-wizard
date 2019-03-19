
export default class GameObject {

	constructor(x, y, vel_x, vel_y, width, height, color, bounce, gravity) {
		this.x = x;
		this.y = y;
		this.vel_x = vel_x;
		this.vel_y = vel_y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.bounce = bounce;
		this.gravity = gravity;
	}

	// Draws the game object for this frame. Requires the context of the 
	// canvas that you want to draw on.
	render = (canvasContext) => {

		canvasContext.fillStyle = this.color;
		canvasContext.fillRect(this.x, this.y, this.width, this.height);
	}

	update = (stage) => {

		// Set an interval so that speeds are consistent no matter the framrate
		let interval = 1 / stage.framerate;

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

	onCollision = () => {

	}

}