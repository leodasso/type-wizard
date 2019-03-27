import React from 'react';

import GameLevel from '../../classes/GameLevel';
import {defaultTutorial} from './shared';

// import chapter classes
import basicMonster from '../basicMonster';
import { tutorialKeys1, tutorialKeys2} from '../keysets';

import TimedChapter from '../../classes/chapters/TimedChapter';


export default () => new GameLevel(
    1,
    'Speed Demon',
    `It's not many keys, but there's a lot of Keymons! Can you keep up?`,
    tutorialKeys1,

    // Chapters
    [

        new TimedChapter(
            defaultTutorial, 
            tutorialKeys1, 
            // spawns
            [basicMonster],
            10,
            3
        ),

        new TimedChapter(
            defaultTutorial, 
            tutorialKeys2, 
            // spawns
            [basicMonster],
            15,
            5
        ),
    ]
)