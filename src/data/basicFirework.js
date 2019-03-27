import Firework from '../classes/Firework';

export default (position = {x:50, y:50, z:0}) => {

    return new Firework(
        position, 
        {x:0, y:0, z:0},
        {w:50, h:50},
        'blue',
        1,
        0,
        40,
        );
}