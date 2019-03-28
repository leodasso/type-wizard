import GameObject from "./gameObject";
import calc from "../data/calc";

export default class Particle extends GameObject{

	constructor(position, velocity, size, color, lifetimeRange, deathObjectMethod, spriteConstructor) {

		const newLifetime = calc.randomRange(lifetimeRange.min, lifetimeRange.max);
		super(position, velocity, size, color, newLifetime, deathObjectMethod, spriteConstructor);
		this.initSize = {...size};

	}

	update(stage) {
		super.update(stage);

		// Normalized lifetime - time left represented as a range between 0 - 1
		let n = this.lifetime / this.startLifetime;

		this.size = {
			w: this.initSize.w * n,
			h: this.initSize.h * n,
		}
	}

}