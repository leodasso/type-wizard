

export default class GameLevel {

    constructor(startDifficulty, endDifficulty, duration) {
        this.startDifficulty = startDifficulty;
        this.endDifficulty = endDifficulty;
        this.duration = duration;
    }

    /** Takes an array of keycodes and sets those as the active
     * keys for this level.
     */
    setEnabledKeys = (keyCodes) => {
        this.enabledKeys = keyCodes;
    }
}