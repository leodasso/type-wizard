
/** GameObject is the base class for any object that shows up on the stage.
 * It takes care of rendering and motion. Position and Velocity should be 
 * objects with up to 3 coords {x:25, y:45, z:3}. {x:25, y:45} is also acceptable. 
 * Size is an object with 2 coords {w:5, h:10}. Color should be a string, example is
 * 'red' or 'rgb(25, 123, 33)
 * Death object method is a method that returns a new object - it's important
 * that it has a parameter for position.
 */
export default class GameObject {

	// lets the game update loop know that it can remove this object.
	destroyed = false;

	/**
	 * 
	 * @param {object} position object with x, y, z
	 * @param {object} velocity object with x, y, z - pixels per second.
	 * @param {object} size object with w, h width and height size
	 * @param {string} color color string 'red' or 'rgb(5, 2, 6), etc
	 * @param {Number} lifetime lifetime in seconds
	 * @param {function} deathObjectMethod Method which returns a new instance of the death object
	 */
	constructor(position, velocity, size, color, lifetime, deathObjectMethod) {
		this.position 		= getSafeVector(position);
		this.velocity 		= getSafeVector(velocity);
		this.size 			= size;
		this.color 			= color;
		this.lifetime 		= lifetime;
		this.deathObjectMethod 	= deathObjectMethod;
		this.gravity		= true;
		this.isVisible		= true;
		this.hasShadow		= true;
		this.initialized 	= false;
		this.startLifetime	= lifetime;		// Memorizes the original lifetime
	}


	// Draws the game object for this frame. Requires the context of the 
	// canvas that you want to draw on.
	render (canvasContext) {

		if (!this.isVisible) return;

		if (this.color) {
			canvasContext.fillStyle = this.color;
			const renderRect = this.renderRect();
			canvasContext.fillRect(renderRect.x, renderRect.y, renderRect.w, renderRect.h);
		}
	}

	/**Returns a rect where the screenSpacePosition is the center of the rect, and it extends all directions
	 * equally.
	 */
	renderRect() {
		const pos = this.screenSpacePosition();
		return {
			x: pos.x - this.size.w / 2,
			y: pos.y - this.size.h / 2,
			w: this.size.w,
			h: this.size.h,
		}
	}

	screenSpacePosition() {
		// the onscreen y is a combination of y and z coords. The amount we multiply z by 
		// is kind of arbitrary, but gives the illusion of angle changing
		const z = this.position.z ? this.position.z : 0;
		return {x: this.position.x, y: this.position.y - (z/2) };
	}

	renderShadow = canvasContext => {

		if (!this.hasShadow || !this.isVisible) return;
		canvasContext.fillStyle = 'black';
		canvasContext.fillRect(
			this.position.x, 
			this.position.y + this.size.h - this.size.h/3, 
			this.size.w, 
			this.size.h / 3);
	}

	/** Runs once on object creation */
	init (stage) {
		this.initialized = true;

	}

	/** Updates the movement / physics of this object */
	update (stage) {

		if (!this.initialized) {
			this.init(stage);
		}

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
			this.velocity.z -= stage.gravity * interval;
		}

		// velocity
		this.position.x += this.velocity.x * interval;
		this.position.y += this.velocity.y * interval;
		this.position.z += this.velocity.z * interval;

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

		// bounce z - this is the coord perpendicular to the ground plane so it's a bit diff
		if (this.position.z < 0) {
			this.velocity.z = Math.abs(this.velocity.z);
			this.position.z = 0;
			this.onCollision();
		}
	}

	/** Destroys this object. Takes in the array of the game stage, and
	 * removes this object from the array.
	 */
	destroy(stage) {

		this.destroyed = true;

		if (this.deathObjectMethod) {
			// using the death object method, spawn a new instance of the
			// death object. (i.e. an explosion, particle, etc)
			const deathObject = this.deathObjectMethod(this.position);
			stage.gameObjects.push(deathObject);
		}
	}

	onCollision() {

	}
}

const getSafeVector = (vector) => (
	{
		x: vector.x ? vector.x: 0,
		y: vector.y ? vector.y: 0,
		z: vector.z ? vector.z: 0,
	})