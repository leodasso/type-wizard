import React from 'react';

import GameLevel from '../../classes/GameLevel';
import {defaultTutorial} from './shared';

// import chapter classes
import InitSpawnChapter from '../../classes/chapters/InitSpawnChapter';

import basicMonster from '../basicMonster';
import { beginnerKeys } from '../keysets';

// tutorial
import Keymons from '../../components/Tutorials/Keymons/Keymons';


export default () => new GameLevel(
    1,
    'Keymons',
    'Keymons attack!',
    beginnerKeys,

    // Chapters
    [
        new InitSpawnChapter(
            <Keymons/>, 
            beginnerKeys, 
            // Init spawns
            [basicMonster, basicMonster, basicMonster, basicMonster, basicMonster,],
        ),

        new InitSpawnChapter(
            defaultTutorial, 
            beginnerKeys, 
            // Init spawns
            [basicMonster, basicMonster, basicMonster, basicMonster,],

        ),

        new InitSpawnChapter(
            defaultTutorial, 
            beginnerKeys, 
            // Init spawns
            [basicMonster, basicMonster, basicMonster, basicMonster,],

        ),

        new InitSpawnChapter(
            defaultTutorial, 
            beginnerKeys, 
            // Init spawns
            [basicMonster, basicMonster,  basicMonster,],
        )
    ]
)