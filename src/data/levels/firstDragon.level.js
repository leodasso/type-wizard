import GameLevel from '../../classes/GameLevel';
import {defaultTutorial} from './shared';

// import chapter classes
import InitSpawnChapter from '../../classes/chapters/InitSpawnChapter';
import TimedChapter from '../../classes/chapters/TimedChapter';
import { beginnerKeys, allKeys } from '../keysets';

import {smallDragon} from '../dragons';
import basicMonster from '../basicMonster';


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

        new TimedChapter(
            defaultTutorial, 
            undefined, 
            // Init spawns
            [basicMonster],
            15,
            2
        ),

        new InitSpawnChapter(
            defaultTutorial, 
            undefined, 
            [smallDragon, smallDragon],
        ),
    ]
)