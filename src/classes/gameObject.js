import calc from "../data/calc";

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
	 * @param {function} spriteConstructor function which creates a new instance of a sprite or sprite animation
	 */
	constructor(position, velocity, size, color, lifetime, deathObjectMethod, spriteConstructor) {
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
		this.growIn			= false;			// Start small and grow in to fullsize
		this.globalScale	= 1;
		if (spriteConstructor) {
			this.sprite			= spriteConstructor();
		}
	}


	// Draws the game object for this frame. Requires the context of the 
	// canvas that you want to draw on.
	render (ctx) {

		if (!this.isVisible) return;

		if (this.color) {
			ctx.fillStyle = this.color;
			const renderRect = this.renderRect();
			ctx.fillRect(renderRect.x, renderRect.y, renderRect.w * this.globalScale, renderRect.h * this.globalScale);
		}

		// render the monster sprite
		const rect = this.renderRect();
		const pos = {x: rect.x, y: rect.y};
		this.sprite && this.sprite.render(ctx, pos, this.getTotalSize());
		
	}

	/**Returns a rect where the screenSpacePosition is the center of the rect, and it extends all directions
	 * equally.
	 */
	renderRect() {
		const pos = this.screenSpacePosition();
		const size = this.getTotalSize();
		return {
			x: pos.x - size.w / 2,
			y: pos.y - size.h / 2,
			w: size.w,
			h: size.h,
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

		const size = this.getTotalSize();
		canvasContext.fillStyle = 'black';
		canvasContext.fillRect(
			this.position.x - size.w / 2, 
			this.position.y + size.h - size.h / 3, 
			size.w, 
			size.h / 3);
	}

	/** Runs once on object creation */
	init (stage) {
		this.initialized = true;
		if (this.growIn) {
			this.globalScale = 0;
		}
	}

	getTotalSize() {
		return {w: this.size.w * this.globalScale, h: this.size.h * this.globalScale}
	}

	/** Updates the movement / physics of this object */
	update (stage) {

		if (!this.initialized) {
			this.init(stage);
		}

		if (this.growIn) {
			this.globalScale = calc.lerp(this.globalScale, 1, .1);
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

		const stageSize = stage.getSize();

		// bounce x
		if (this.position.x + this.size.w/2 > stageSize.w || this.position.x - this.size.w/2< 0) {
			this.velocity.x = -this.velocity.x;
			this.onCollision();
		}

		// bounce y
		if (this.position.y + this.size.h/2 > stageSize.h || this.position.y - this.size.h/2< 0) {
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
			deathObject.size = this.size;
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