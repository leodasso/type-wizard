import basicFirework from "./basicFirework";
import {spriteAnim} from './MonsterSprites';
import WordDragon from "../classes/WordDragon";

export default (position = {x:0, y:50, z:0}, phrase = "hello") => {

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