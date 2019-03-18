
export default class KeyData {

    constructor(keyCode, key, enabled = true) {
        this.keyCode = keyCode;
        this.key = key;
        this.enabled = enabled;
    }
}