import GameObject from './gameObject';
import Particle from './Particle';

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

		// This burst emits many particles in one frame.
		for (let i = 0; i < this.burstEmits; i++) {
			this.emit(stage);
		}
	}

	update (stage) {
		super.update(stage);

		// Set an interval so that speeds are consistent no matter the framrate
		let interval = 1 / stage.fps;

		// For emitting particles over a set interval
		this.emitTimer += interval;
		if (this.emitTimer >= this.emitPeriod) {
			this.emit(stage);
			this.emitTimer = 0;
		}
	}

	/** Emits a single particle onto the stage */
	emit(stage) {

		// choose a random position
		const pos = {
			x: this.position.x + Math.random()*this.size.w,
			y: this.position.y + Math.random()*this.size.h,
			z: this.position.z,
		};

		// create a new game object at that position
		const magnitude = 100;
		const vel = {
			x: this.velocity.x + randomRange(magnitude),
			y: this.velocity.y + randomRange(magnitude),
			z: this.velocity.z + Math.random() * magnitude * 6,
		};

		const size = {
			w: 6,
			h: 6,
		}

		// create the new particle
		const newParticle = new Particle(
			pos, 
			vel, 
			size, 
			'cyan', 
			{min: .5, max: 1.5},
			 undefined);
		stage.gameObjects.push(newParticle);
	}

}

function randomRange(size) {
	return Math.random() * size - (size/2);
}