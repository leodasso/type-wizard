import Firework from '../classes/Firework';

export default (position = {x:50, y:50, z:0}) => {

    return new Firework(
        position, 
        {x:0, y:0, z:0},
        {w:50, h:50},
        'yellow',
        1,
        0,
        400,
        {x:60, y:60, z:500},

        // Particle params
        {
            minSize: 5,
            maxSize: 12,
            minLifetime: .5,
            maxLifetime: 1.5,
        },
        );
}