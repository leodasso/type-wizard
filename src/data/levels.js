import React from 'react';

import GameLevel from '../classes/GameLevel';
import LevelChapter from '../classes/LevelChapter';

// Importing level chapters
import FindBump1 from '../components/Tutorials/FindBump1/FindBump1';
import FindBump2 from '../components/Tutorials/FindBump2/FindBump2';
import HomeRow from '../components/Tutorials/HomeRow/HomeRow';
import Keymons from '../components/Tutorials/Keymons/Keymons';

import TutorialChapter from '../classes/TutorialChapter';
import InitSpawnChapter from '../classes/InitSpawnChapter';
import prefabs from './prefabs';

const homeKeys1 = [70];
const homeKeys2 = [74];
const beginnerKeys = [65, 83, 68, 70, 74, 75, 76, 186];
const middleRowKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76, 186];
const allKeys = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80,
				65, 83, 68, 70, 71, 72, 74, 75, 76, 186,
				90, 88, 67, 86, 66, 78, 77, ]

const defaultTutorial = (<div></div>);

/**Exporting an array of functions here. That way, every time we call for this level,
 * it creates a new instance. This is to prevent the data from persisting between play
 * sessions.
 */
export default [

	// The tutorial level
	() => new GameLevel(
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
	),

	// Introduction to monsters
	() => new GameLevel(
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
				[
					prefabs.basicMonster,
				],
				2,
			)
		]
	)
]