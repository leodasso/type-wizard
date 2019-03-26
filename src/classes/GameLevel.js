import react from 'react';

export default class GameLevel {

	/**
	 * @param {number} id Stage ID - should be unique!!
	 * @param {string} name Display name of this stage
	 * @param {string} blurb Short description about this stage
	 * @param {number} difficulty Frequency/challenge of enemies
	 * @param {number} duration Duration of the stage (in seconds)
	 * @param {array} enabledKeys An array of the keycodes for enabled keys on this stage
	 * @param {array} chapters Array of all the chapters of this stage
	 */
	constructor(id, name, blurb, enabledKeys, chapters) {

		this.id = id;
		this.name = name;
		this.blurb = blurb;
		this.enabledKeys = enabledKeys;
		this.chapters = chapters;

		this.complete = false;
		this.currentChapterIndex = 0;
	}

	/** Takes an array of keycodes and sets those as the active
	 * keys for this level.
	 */
	setEnabledKeys = (keyCodes) => {
		this.enabledKeys = keyCodes;
	}

	update = (stage, ctx) => {

		// If there's no chapters for some reason, just exit the function.
		if (this.chapters.length < 1) {
			this.complete = true;
			return;
		}

		// If this level is already complete, exit.
		if (this.complete) return;

		// get the current chapter and update it
		const currentChapter = this.chapters[this.currentChapterIndex];
		if (currentChapter.complete) {
			this.gotoNextChapter();
		}

		// Update the current chapter
		currentChapter.update(stage, ctx);
	}

	gotoNextChapter() {
		this.currentChapterIndex++;

		// If this was the last chapter, wrap up
		if (this.currentChapterIndex >= this.chapters.length) {
			this.complete = true;
		}
	}
}