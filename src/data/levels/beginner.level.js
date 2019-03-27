import React from 'react';
import { homeKeys1, homeKeys2, beginnerKeys } from '../keysets';

// Import chapter classes
import TutorialChapter from '../../classes/chapters/TutorialChapter';
import GameLevel from '../../classes/GameLevel';

// Import the tutorial components
import FindBump1 from '../../components/Tutorials/FindBump1/FindBump1';
import FindBump2 from '../../components/Tutorials/FindBump2/FindBump2';
import HomeRow from '../../components/Tutorials/HomeRow/HomeRow';

export default () => new GameLevel(
    0,
    'Beginner',
    'Learn proper key placement!',
    beginnerKeys,

    // Chapters
    [
        new TutorialChapter((<FindBump1/>), homeKeys1, homeKeys1),
        new TutorialChapter((<FindBump2/>), homeKeys2, homeKeys2),
        new TutorialChapter((<HomeRow/>), beginnerKeys, beginnerKeys),
    ]
);