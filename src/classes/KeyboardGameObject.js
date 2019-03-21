import GameObject from "./gameObject";

/** Keyboard game object is associated to a specific key. */
export default class KeyboardGameObject extends GameObject {

    constructor(position, velocity, width, height, color, keyData) {
        super(position, velocity, width, height, color);
        this.keyData = keyData;
    }

    


}