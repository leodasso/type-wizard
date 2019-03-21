import KeyboardGameObject from '../classes/KeyboardGameObject';

export default {
	
	
	basicMonster: () => {

		return new KeyboardGameObject(
			{x:0, y:0}, 
			{x:0, y:0},
			50, 50, 'red')
	}

}