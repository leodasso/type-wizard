import KeyboardGameObject from '../classes/KeyboardGameObject';
import Firework from '../classes/Firework';

export default {
	
	
	basicMonster: (position = {x:50, y:50, z:0}) => {

		return new KeyboardGameObject(
			position, 
			{x:0, y:0, z:0},
			{w:50, h:50},
			'red', null)
	},

	basicMonsterDeath: (position = {x:50, y:50, z:0}) => {

		return new Firework(
			position, 
			{x:0, y:0, z:0},
			{w:50, h:50},
			'blue', 3, null, 1, 10);
	}

}