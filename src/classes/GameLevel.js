

export default class GameLevel {

	constructor(id, name, blurb, difficulty, duration, enabledKeys) {

		this.id = id;
		this.name = name;
		this.blurb = blurb;
		this.difficulty = difficulty;
		this.duration = duration;
		this.enabledKeys = enabledKeys;
	}

	/** Takes an array of keycodes and sets those as the active
	 * keys for this level.
	 */
	setEnabledKeys = (keyCodes) => {
		this.enabledKeys = keyCodes;
	}
}