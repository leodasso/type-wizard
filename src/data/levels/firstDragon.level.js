import React from 'react';

import GameLevel from '../../classes/GameLevel';
import {defaultTutorial} from './shared';

// import chapter classes
import InitSpawnChapter from '../../classes/chapters/InitSpawnChapter';
import { beginnerKeys, tutorialKeys1 } from '../keysets';

// tutorial
import Keymons from '../../components/Tutorials/Keymons/Keymons';

import {smallDragon} from '../dragons';


export default () => new GameLevel(
    1,
    'Small Dragon',
    'Can you defeat the Phrase Dragon?',
    beginnerKeys,

    // Chapters
    [
        new InitSpawnChapter(
            <Keymons/>, 
            tutorialKeys1, 
            // Init spawns
            [smallDragon],
        ),
    ]
)