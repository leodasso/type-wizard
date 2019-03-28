import basicFirework from "./basicFirework";
import {spriteAnim} from './DragonSprites';
import WordDragon from "../classes/WordDragon";

const smallDragon = (position = {x:0, y:20, z:150}, phrase = "hello") => {

    return new WordDragon(
        position, 
        {x:50, y:0, z:0},
        {w:260, h:100},
        null,
        null,
        basicFirework,
        spriteAnim,
        phrase
        )
}

export { smallDragon}