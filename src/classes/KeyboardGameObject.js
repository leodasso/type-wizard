import GameObject from "./gameObject";
import {frame1} from '../data/MonsterSprites';

/** Keyboard game object is associated to a specific key. */
export default class KeyboardGameObject extends GameObject {

	/**
	 * 
	 * @param {object} position object with x, y, z
	 * @param {object} velocity object with x, y, z - pixels per second.
	 * @param {object} size object with w, h width and height size
	 * @param {string} color color string 'red' or 'rgb(5, 2, 6), etc
	 * @param {Number} lifetime lifetime in seconds
	 * @param {function} deathObjectMethod Method which returns a new instance of the death object
	 * @param {object} keyData The data for the key that this monster is sitting on
	 */
	constructor(position, velocity, size, color, lifetime, deathObjectMethod, keyData ) {
		super(position, velocity, size, color, lifetime, deathObjectMethod);
		this.keyData = keyData;
	}

	/**  If the player presses the key that this object is sitting on,
	 * this function will be called. The stage is passed into this function
	 * so other objects can be added/removed
	 * */
	pressMe = (stage) => {
		this.destroy(stage);
	}

	render(ctx) {
		super.render(ctx);

		// render the monster sprite
		const rect = this.renderRect();
		const pos = {x: rect.x, y: rect.y};
		frame1.render(ctx, pos, this.size);

		// render the keypress for this monster
		const center = this.screenSpacePosition();
		ctx.font = '28px Raleway';
		ctx.textAlign = 'center';
		ctx.fillStyle = 'white';
		ctx.fillText(this.keyData.key, center.x, center.y + 12);
	}

	destroy(stage) {
		super.destroy(stage);

		// send an event to the stage that this was destroyed
		stage.newEvent({
			type: 'death',
			payload: this,
		})
		
		stage.onMonsterKilled(this.keyData);
	}

}