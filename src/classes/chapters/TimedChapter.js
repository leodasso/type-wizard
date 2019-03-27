import LevelChapter from "./LevelChapter";

// This chapter can spawn a variety of things at the beginning 
export default class TimedChapter extends LevelChapter {

	/**
	 * @param {React.Component} component The component this chapter will display 
	 * @param {Array} allowedKeys Array of keys that this chapter allows
	 * @param {Array} spawns Array of the possible spawns
	 */
	constructor(component, allowedKeys, spawns, duration) {
		super(component, allowedKeys);
		this.spawns = spawns;
		this.spawnInstances = [];
		this.duration = duration;
		this.elapsed = 0;
	}

	start(stage) {
		super.start(stage);

		for (const spawn of this.spawns) {
			const newInstance = stage.addObjectToRandomKey(spawn);
			this.spawnInstances.push(newInstance);
		}
	}

	/** Returns the progress (between 0 and 1) of the current level */
	progress = () => this.elapsed / this.duration;


	update(stage, ctx) {
		super.update(stage, ctx);
		
		// Update the timer
		this.elapsed += (1 / stage.fps);

		// Draw a new rect
		ctx.fillStyle = 'red';
		let newWidth = stage.canvas.width * (1 - this.progress());
		this.getContext().fillRect(1, 1, newWidth, 10);

    }

	processEvent(event) {
		super.processEvent(event);

	}


	finishChapter(stage) {
		super.finishChapter(stage);
	}
}