import GameObject from './gameObject';

export default class Firework extends GameObject {

	constructor(position, velocity, width, height, color, lifetime, deathObject, 
		emitDuration, emitPerSecond) {
			super(position, velocity, width, height, color, lifetime, deathObject);
			this.emitDuration = emitDuration;
			this.emitPerSecond = emitPerSecond;
		}

	update (stage) {
		super.update(stage);

		// Set an interval so that speeds are consistent no matter the framrate
		let interval = 1 / stage.fps;

		this.emitDuration -= interval;

		// console.log('hi im a firework', this.emitDuration);
	}

}