import GameObject from './gameObject';
import Particle from './Particle';
import calc from '../data/calc';

export default class Firework extends GameObject {

	/**
	 * 
	 * @param {object} position object with {x:nummber, y:number, z:number}
	 * @param {object} velocity  object with {x:nummber, y:number, z:number}
	 * @param {object} size  object with {w:number, h:number}
	 * @param {string} color example: 'red', 'rgb(3, 52, 13)'
	 * @param {number} lifetime 
	 * @param {number} emitPerSecond 
	 * @param {number} burstEmits 
	 * @param {object} emissionVelocity object with {x:nummber, y:number, z:number}. max velocity of emitted particles
	 */
	constructor(position, velocity, size, color, lifetime, emitPerSecond, burstEmits, emissionVelocity) {
			super(position, velocity, size, color, lifetime, undefined);
			this.emitPerSecond = emitPerSecond;
			this.burstEmits = burstEmits;
			this.isVisible = false;
			this.emitTimer = 0;
			this.emitPeriod = 1 / emitPerSecond;
			this.emissionVelocity = emissionVelocity;
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

		const width = this.size.w;
		const height = this.size.h;

		// choose a random position
		const pos = {
			x: calc.randomRange(this.position.x - width/2, this.position.x + width/2),
			y: calc.randomRange(this.position.y - height/2, this.position.y + height/2),
			z: this.position.z,
		};

		// create a new game object at that position
		const vel = {
			x: this.velocity.x + calc.randomRange(-this.emissionVelocity.x, this.emissionVelocity.x),
			y: this.velocity.y + calc.randomRange(-this.emissionVelocity.y, this.emissionVelocity.y),
			z: this.velocity.z + Math.random() * this.emissionVelocity.z,
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
			this.color, 
			{min: .2, max: 1},
			 undefined);
		stage.gameObjects.push(newParticle);
	}

}