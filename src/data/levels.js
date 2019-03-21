import GameLevel from '../classes/GameLevel';


const beginnerKeys = [65, 83, 68, 70, 74, 75, 76, 186];
const middleRowKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76, 186];
const allKeys = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80,
				65, 83, 68, 70, 71, 72, 74, 75, 76, 186,
				90, 88, 67, 86, 66, 78, 77, ]

export default [
	new GameLevel(0, 'Tutorial', 
			'Learn proper key placement!', 
			1, 30, beginnerKeys),

	new GameLevel(1, 'Beginner', 
			'Practice using the home row keys', 
			1, 30, beginnerKeys),

	new GameLevel(100, 'Journeyman', 
			'Try practicing with new keys!', 
			1, 60, middleRowKeys),
]