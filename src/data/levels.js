import GameLevel from '../classes/GameLevel';


const beginnerKeys = [65, 83, 68, 70, 74, 75, 76, 186];
const middleRowKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76, 186];
const allKeys = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80,
				65, 83, 68, 70, 71, 72, 74, 75, 76, 186,
				90, 88, 67, 86, 66, 78, 77, ]

export default {
	beginner1: new GameLevel(1, 5, 30, beginnerKeys),
	beginner2: new GameLevel(2, 8, 45, beginnerKeys),
	journeyman1: new GameLevel(3, 8, 60, middleRowKeys),
	journeyman2: new GameLevel(3, 8, 60, middleRowKeys),
	journeyman3: new GameLevel(3, 8, 60, middleRowKeys),
	journeyman4: new GameLevel(3, 8, 60, middleRowKeys),
	expert1: new GameLevel(10, 15, 120, allKeys),
	expert2: new GameLevel(10, 15, 120, allKeys),
	expert3: new GameLevel(10, 15, 120, allKeys),
	expert4: new GameLevel(10, 15, 120, allKeys),

	
}