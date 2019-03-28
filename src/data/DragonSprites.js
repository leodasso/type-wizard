import { Sprite, SpriteAnimation } from "../classes/SpritePack";
import calc from '../data/calc';

const frame1 = new Sprite(
    '/images/typewizard_sprites_100px.png',
    0, 600,
    600, 200
);

const frame2= new Sprite(
    '/images/typewizard_sprites_100px.png',
    0, 800,
    600, 200
);


const spriteArray = [frame1, frame2]


const spriteAnim = () => new SpriteAnimation(
    spriteArray,
    15,
    true,
    Math.round(calc.randomRange(0, 10)),
)

export {spriteAnim}