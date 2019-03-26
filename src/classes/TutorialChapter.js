import LevelChapter from "./LevelChapter";

export default class TutorialChapter extends LevelChapter {

	/**
	 * 
	 * @param {React.Component} component The component this chapter will display 
	 * @param {Array} allowedKeys Array of keys that this chapter allows
	 * @param {Array} keysToContinue Array of keys that need to be pressed in order to continue
	 */
	constructor(component, allowedKeys, keysToContinue, anyKeyToContinue = false) {
		super(component, allowedKeys);
		this.keysToContinue = keysToContinue;
		this.anyKeyToContinue = anyKeyToContinue;
	}

	start(stage) {
		super.start(stage);

		// add eventListener
		document.addEventListener('keyup', this.keyUp);
	}

	processEvent(event) {
		super.processEvent(event);

		if (event.type === 'press') {

			if (this.anyKeyToContinue) {

				// if marked anyKeyToContinue, just allow any key to finish the chapter.
				this.finishChapter();

			}else {

				// Mark the key off from the 'keys to continue' list. 
				// When there's no keys left to press, finish the chapter.
				this.keysToContinue = this.keysToContinue.filter(key => key !== event.key.id);
				if (this.keysToContinue.length < 1) {
					this.finishChapter();
				}
			}
		}

		
	}

	

	finishChapter(stage) {
		super.finishChapter(stage);
		document.removeEventListener('keyup', this.keyUp);
	}
}