import GameObject from './gameObject';

export default class Firework extends GameObject {

	constructor(position, velocity, size, color, lifetime, emitPerSecond, burstEmits) {
			super(position, velocity, size, color, lifetime, undefined);
			this.emitPerSecond = emitPerSecond;
			this.burstEmits = burstEmits;
			this.isVisible = false;
			this.emitTimer = 0;
			this.emitPeriod = 1 / emitPerSecond;
		}

	init(stage) {
		super.init(stage);
		console.log('hi i iniitz');
		for (let i = 0; i < this.burstEmits; i++) {
			this.emit(stage);
		}
	}

	update (stage) {
		super.update(stage);

		// Set an interval so that speeds are consistent no matter the framrate
		let interval = 1 / stage.fps;

		this.emitTimer += interval;
		if (this.emitTimer >= this.emitPeriod) {
			this.emit(stage);
			this.emitTimer = 0;
		}
	}

	emit(stage) {

		// choose a random position
		const pos = {
			x: this.position.x + Math.random()*this.size.w,
			y: this.position.y + Math.random()*this.size.h,
			z: this.position.z,
		};

		// create a new game object at that position
		const vel = {
			x: this.velocity.x + randomRange(100),
			y: this.velocity.y + randomRange(100),
			z: this.velocity.z + randomRange(100),
		};

		const size = {
			w: 6,
			h: 6,
		}

		// create the new particle
		const newParticle = new GameObject(pos, vel, size, 'cyan', 1, undefined);
		stage.gameObjects.push(newParticle);
	}

}

function randomRange(size) {
	return Math.random() * size - (size/2);
}