import basicFirework from "./basicFirework";
import KeyboardGameObject from '../classes/KeyboardGameObject';
import {spriteAnim} from './MonsterSprites';

export default (position = {x:50, y:50, z:0}) => {

    return new KeyboardGameObject(
        position, 
        {x:0, y:0, z:0},
        {w:80, h:80},
        null,
        null, 
        basicFirework,
        undefined,
        spriteAnim
        )
}