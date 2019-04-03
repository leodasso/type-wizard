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
	'Words',
	`Now that you've pressed keys, try typing whole words! Remember to keep your form.`,
	allKeys,

	// Chapters
	[
		new InitSpawnChapter(
			defaultTutorial, 
			undefined, 
			[smallDragon],
		),

		new TimedChapter(
			defaultTutorial, 
			undefined, 
			[basicMonster],
			15,
			1.3
		),

		new InitSpawnChapter(
			defaultTutorial, 
			undefined, 
			[smallDragon],
		),
	]
)