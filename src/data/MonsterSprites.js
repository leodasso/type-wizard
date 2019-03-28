import { Sprite, SpriteAnimation } from "../classes/SpritePack";
import calc from '../data/calc';

const frame1 = new Sprite(
    '/images/typewizard_sprites_100px.png',
    0, 0,
    100, 100
);

const frame2= new Sprite(
    '/images/typewizard_sprites_100px.png',
    100, 0,
    100, 100
);

const frame3= new Sprite(
    '/images/typewizard_sprites_100px.png',
    200, 0,
    100, 100
);

const frame4= new Sprite(
    '/images/typewizard_sprites_100px.png',
    300, 0,
    100, 100
);

const spriteArray = [frame1, frame2, frame3, frame4]


const spriteAnim = () => new SpriteAnimation(
    spriteArray,
    10,
    true,
    Math.round(calc.randomRange(0, 10)),
)

export { frame1, frame2, frame3, frame4, spriteAnim}