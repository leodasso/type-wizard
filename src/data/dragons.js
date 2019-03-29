import {spriteAnim} from './DragonSprites';
import WordDragon from "../classes/WordDragon";
import bigFirework from "./bigFirework";

const smallDragon = (position = {x:0, y:20, z:400}, phrase = "hello") => {

    return new WordDragon(
        position, 
        {x:50, y:0, z:0},
        {w:260, h:100},
        null,
        null,
        bigFirework,
        spriteAnim,
        phrase
        )
}

export { smallDragon}