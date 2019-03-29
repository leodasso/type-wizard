
/** A single segment of a game stage. A segment can be a tutorial section,
 * timed segment, kill counts, etc.
 */
 export default class LevelChapter {

	/**
	 * @param {Component} component The react component to mount while this chapter is showing.
	 * @param {Array} allowedKeys Optional - limit the allowed keys on this chapter
	 */
	constructor(component, allowedKeys) {
		this.component = component;
		this.complete = false;
		this.limitsKeys = allowedKeys ? true : false;
		this.allowedKeys = allowedKeys;
		this.init = false;
		this.spawnInstances = [];
	}

	start(stage) {
		this.init = true;
		stage.beginLevelChapter(this);
		if (this.component)
			stage.addTutorialComponent(this.component);
	}

	processEvent(event) {
		// console.log('got event', event);
	}

	update(stage, ctx) {

		if (!this.init) {
			this.start(stage);
			return;
		}
	}

	finishChapter(stage) {

		// clear out the spawned instances
		for (const instance of this.spawnInstances) {
			instance.destroy && instance.destroy(stage);
		}
		this.complete = true;
	}
}