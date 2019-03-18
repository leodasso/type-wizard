import Keyboard from '../../classes/keyboard';
import KeyData from '../../classes/keyData';

const keyRows = [
	[
		new KeyData(81, 'Q'),
		new KeyData(87, 'W'),
		new KeyData(69, 'E'),
		new KeyData(82, 'R'),
		new KeyData(84, 'T'),
		new KeyData(89, 'Y'),
		new KeyData(90, 'U'),
		new KeyData(73, 'I'),
		new KeyData(79, 'O'),
		new KeyData(80, 'P'),
	],
	[	
		new KeyData(65, 'A'),
		new KeyData(83, 'S'),
		new KeyData(68, 'D'),
		new KeyData(70, 'F'),
		new KeyData(71, 'G'),
		new KeyData(72, 'H'),
		new KeyData(74, 'J'),
		new KeyData(75, 'K'),
		new KeyData(76, 'L'),
		new KeyData(186, ';'),
	],
	[	
		new KeyData(90, 'Z'),
		new KeyData(88, 'X'),
		new KeyData(67, 'C'),
		new KeyData(86, 'V'),
		new KeyData(66, 'B'),
		new KeyData(78, 'N'),
		new KeyData(77, 'M'),
		new KeyData(188, ','),
		new KeyData(190, '.'),
	]
]

export default new Keyboard(keyRows)