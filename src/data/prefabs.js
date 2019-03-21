import KeyboardGameObject from '../classes/KeyboardGameObject';
import Firework from '../classes/Firework';

export default {
	
	
	basicMonster: (position) => {

		return new KeyboardGameObject(
			position, 
			{x:0, y:0},
			50, 50, 'red', null)
	},

	basicMonsterDeath: (position) => {

		return new Firework(
			position, 
			{x:0, y:0},
			2, 2, 'blue', 3, null, 1, 10);
	}

}