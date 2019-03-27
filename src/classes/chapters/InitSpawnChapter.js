import LevelChapter from "./LevelChapter";

// This chapter can spawn a variety of things at the beginning 
export default class InitSpawnChapter extends LevelChapter {

	/**
	 * @param {React.Component} component The component this chapter will display 
	 * @param {Array} allowedKeys Array of keys that this chapter allows
	 * @param {Array} spawns Array of the spawns that will happen when the chapter starts
	 */
	constructor(component, allowedKeys, spawns) {
		super(component, allowedKeys);
		this.spawns = spawns;
		this.spawnInstances = [];
	}

	start(stage) {
		super.start(stage);

		for (const spawn of this.spawns) {
			const newInstance = stage.addObjectToRandomKey(spawn);
			this.spawnInstances.push(newInstance);
		}
	}

	processEvent(event) {
		super.processEvent(event);

		// For death events, check if the killed monster was part of my spawns.
		// if it was, then remove it from the spawn instances list. When all of my spawns
		// have been killed, finish this chapter.
		if (event.type === 'death') {
			this.spawnInstances = this.spawnInstances.filter(monster => 
				monster !== event.payload);
			if (this.spawnInstances.length < 1) {
				this.finishChapter();
			}
		}
	}


	finishChapter(stage) {
		super.finishChapter(stage);
	}
}