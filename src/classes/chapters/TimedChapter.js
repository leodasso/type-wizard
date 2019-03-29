import LevelChapter from "./LevelChapter";
import calc from '../../data/calc';

// This chapter can spawn a variety of things at the beginning 
export default class TimedChapter extends LevelChapter {

	/**
	 * @param {React.Component} component The component this chapter will display 
	 * @param {Array} allowedKeys Array of keys that this chapter allows
	 * @param {Array} spawns Array of the possible spawns
	 * @param {Number} duration Duration in seconds for this chapter
	 */
	constructor(component, allowedKeys, spawns, duration, difficulty = 1) {
		super(component, allowedKeys);
		this.spawns = spawns;
		this.duration = duration;
		this.elapsed = 0;
		this.timeSinceSpawn = 0;
		this.difficulty = difficulty;
	}

	start(stage) {
		super.start(stage);
	}

	/** Returns the progress (between 0 and 1) of the current level */
	progress = () => this.elapsed / this.duration;


	update(stage, ctx) {
		super.update(stage, ctx);
		
		// Update the timer
		this.elapsed += (1 / stage.fps);
		this.timeSinceSpawn += (1 / stage.fps * this.difficulty);


		// Spawn monsters - but not at the very end of the stage.
		if (this.progress() < .9) {
			// The more time it's been since a spawn, the more likely it should be
			if (Math.random()< .02 * this.timeSinceSpawn) {
				this.timeSinceSpawn = 0;

				// Choose a random monster from the spawns array
				const monster = calc.randomElementFromArray(this.spawns);
				const newInstance = stage.addObjectToRandomKey(monster);
				this.spawnInstances.push(newInstance);
			}
		}

		if (this.elapsed >= this.duration && this.spawnsAreDestroyed()) {
			this.finishChapter(stage);
			return;
		}

		if (!ctx) return;
		// Draw a new rect
		ctx.fillStyle = 'rgb(66, 146, 119)';
		let newWidth = stage.canvas.width * (this.progress());
		ctx.fillRect(1, 1, newWidth, 4);
	}

	spawnsAreDestroyed() {
		for (const spawn of this.spawnInstances) {
			if (!spawn.destroyed) {
				return false;
			}
		}
		return true;
	}
	


	processEvent(event) {
		super.processEvent(event);

	}


	finishChapter(stage) {
		super.finishChapter(stage);
	}
}