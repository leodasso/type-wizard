import GameObject from "./gameObject";

/** Keyboard game object is associated to a specific key. */
export default class KeyboardGameObject extends GameObject {

    constructor(x, y, vel_x, vel_y, width, height, color, keyData) {
        super(x, y, vel_x, vel_y, width, height, color);
        this.keyData = keyData;
    }

    


}