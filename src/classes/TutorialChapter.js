import LevelChapter from "./LevelChapter";

export default class TutorialChapter extends LevelChapter {

	/**
	 * 
	 * @param {React.Component} component The component this chapter will display 
	 * @param {Array} allowedKeys Array of keys that this chapter allows
	 * @param {Array} keysToContinue Array of keys that need to be pressed in order to continue
	 */
	constructor(component, allowedKeys, keysToContinue) {
		super(component, allowedKeys);
		this.keysToContinue = keysToContinue;
	}

	start(stage) {
		super.start(stage);

		// add eventListener
		document.addEventListener('keyup', this.keyUp);
	}

	processEvent(event) {
		super.processEvent(event);
		this.keysToContinue = this.keysToContinue.filter(key => key != event.key.id);
		if (this.keysToContinue.length < 1) {
			this.finishChapter();
		}
	}

	

	finishChapter(stage) {
		super.finishChapter(stage);
		document.removeEventListener('keyup', this.keyUp);
	}
}