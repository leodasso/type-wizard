import React from 'react';

import GameLevel from '../../classes/GameLevel';
import {defaultTutorial} from './shared';

// import chapter classes
import InitSpawnChapter from '../../classes/chapters/InitSpawnChapter';

import basicMonster from '../basicMonster';
import {beginnerKeys, middleRowKeys } from '../keysets';

// tutorial
import Keymons from '../../components/Tutorials/Keymons/Keymons';
import TimedChapter from '../../classes/chapters/TimedChapter';


export default () => new GameLevel(
    1,
    'Keymons 2',
    'The keymons are back for more!',
    middleRowKeys,

    // Chapters
    [
        new InitSpawnChapter(
            defaultTutorial, 
            beginnerKeys, 
            // Init spawns
            [basicMonster, basicMonster, basicMonster, basicMonster, basicMonster,],
        ),

        new TimedChapter(
            defaultTutorial, 
            middleRowKeys, 
            // Init spawns
            [basicMonster, basicMonster, basicMonster, basicMonster,],
            10
        ),
    ]
)