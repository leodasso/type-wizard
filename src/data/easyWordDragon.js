import basicFirework from "./basicFirework";
import WordDragon from '../classes/WordDragon';

export default (position = {x:50, y:50, z:0}) => {

    return new WordDragon(
        position, 
        {x:0, y:0, z:0},
        {w:50, h:50},
        'red',
        null, 
        basicFirework,
        "please type me"
        )
}