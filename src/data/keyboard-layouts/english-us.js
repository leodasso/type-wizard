import Keyboard from '../../classes/keyboard';
import KeyData from '../../classes/keyData';
import englishWords from '../english.words';

const keyRows = [
	[
		new KeyData(81, 'q'),
		new KeyData(87, 'w'),
		new KeyData(69, 'e'),
		new KeyData(82, 'r'),
		new KeyData(84, 't'),
		new KeyData(89, 'y'),
		new KeyData(85, 'u'),
		new KeyData(73, 'i'),
		new KeyData(79, 'o'),
		new KeyData(80, 'p'),
	],
	[	
		new KeyData(65, 'a'),
		new KeyData(83, 's'),
		new KeyData(68, 'd'),
		new KeyData(70, 'f'),
		new KeyData(71, 'g'),
		new KeyData(72, 'h'),
		new KeyData(74, 'j'),
		new KeyData(75, 'k'),
		new KeyData(76, 'l'),
		new KeyData(186, ';'),
	],
	[	
		new KeyData(90, 'z'),
		new KeyData(88, 'x'),
		new KeyData(67, 'c'),
		new KeyData(86, 'v'),
		new KeyData(66, 'b'),
		new KeyData(78, 'n'),
		new KeyData(77, 'm'),
		new KeyData(188, ','),
		new KeyData(190, '.'),
	]
]


const previewRows = [
	[
		new KeyData(81, 'q'),
		new KeyData(87, 'w'),
		new KeyData(69, 'e'),
		new KeyData(82, 'r'),
		new KeyData(84, 't'),
	],
	[	
		new KeyData(65, 'a'),
		new KeyData(83, 's'),
		new KeyData(68, 'd'),
		new KeyData(70, 'f'),
	],
]

export default new Keyboard(keyRows, 0, "English-US", previewRows, englishWords)