import GameLevel from '../../classes/GameLevel';
import {defaultTutorial} from './shared';

// import chapter classes
import InitSpawnChapter from '../../classes/chapters/InitSpawnChapter';
import { beginnerKeys, allKeys } from '../keysets';

import {smallDragon} from '../dragons';


export default () => new GameLevel(
    1,
    'Small Dragon',
    'Can you defeat the Phrase Dragon?',
    allKeys,

    // Chapters
    [
        new InitSpawnChapter(
            defaultTutorial, 
            undefined, 
            [smallDragon],
        ),

        new InitSpawnChapter(
            defaultTutorial, 
            undefined, 
            [smallDragon],
        ),

        new InitSpawnChapter(
            defaultTutorial, 
            undefined, 
            [smallDragon],
        ),
    ]
)