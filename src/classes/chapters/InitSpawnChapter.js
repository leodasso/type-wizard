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
	}

	start(stage) {
		super.start(stage);

		for (const spawn of this.spawns) {
			console.log('stage spawning');
			stage.addObjectToRandomKey(spawn);
		}
	}

	processEvent(event) {
		super.processEvent(event);
	}


	finishChapter(stage) {
		super.finishChapter(stage);
	}
}