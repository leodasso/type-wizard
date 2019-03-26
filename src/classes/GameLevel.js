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

	update = (stage, ctx) => {

		// If there's no chapters for some reason, just exit the function.
		if (this.chapters.length < 1) {
			this.complete = true;
			return;
		}

		// If this level is already complete, exit.
		if (this.complete) return;

		// get the current chapter and update it
		if (this.getCurrentChapter().complete) {
			this.gotoNextChapter();
		}

		// Update the current chapter
		this.getCurrentChapter().update(stage, ctx);
	}

	getCurrentChapter = () => {
		let chapterIndex = this.currentChapterIndex;
		if (chapterIndex < 0) 
			chapterIndex = 0;
		if (chapterIndex >= this.chapters.length)
			chapterIndex = this.chapters.length - 1;

		return this.chapters[chapterIndex];
	}

	/** If the current chapter has no keys set, just returns the level's enabled keys.
	 * Otherwise, returns the keys of the current chapter.
	 */
	getEnabledKeys = () => {
		if (!this.getCurrentChapter()) return this.enabledKeys;

		if (!this.getCurrentChapter().limitsKeys) return this.enabledKeys;
		return this.getCurrentChapter().allowedKeys;
	}

	processEvent = event => {
		if (!this.getCurrentChapter()) return;
		this.getCurrentChapter().processEvent(event);
	}

	gotoNextChapter() {

		this.currentChapterIndex++;
		
		// If this was the last chapter, wrap up
		if (this.currentChapterIndex >= this.chapters.length) {
			this.complete = true;
		}
	}
}