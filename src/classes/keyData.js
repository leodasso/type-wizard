
export default class KeyData {

    constructor(keyCode, key, shiftedKey) {
        this.keyCode = keyCode;
        this.key = key;
        this.shiftedKey = shiftedKey;
    }

    getShifted() {
        return this.shiftedKey ? this.shiftedKey : this.key.toUpperCase();
    }
}