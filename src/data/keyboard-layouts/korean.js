import Keyboard from '../../classes/keyboard';
import KeyData from '../../classes/keyData';

const keyRows = [
	[
		new KeyData(81, 'ㅂ', 'ㅃ'),
		new KeyData(87, 'ㅈ', 'ㅉ'),
		new KeyData(69, 'ㄷ', 'ㄸ'),
		new KeyData(82, 'ㄱ', 'ㄲ'),
		new KeyData(84, 'ㅅ', 'ㅆ'),
		new KeyData(89, 'ㅛ'),
		new KeyData(85, 'ㅕ'), 
		new KeyData(73, 'ㅑ'),
		new KeyData(79, 'ㅐ', 'ㅒ'),
		new KeyData(80, 'ㅔ', 'ㅖ'),
	],
	[	
		new KeyData(65, 'ㅁ'),
		new KeyData(83, 'ㄴ'),
		new KeyData(68, 'ㅇ'),
		new KeyData(70, 'ㄹ'),
		new KeyData(71, 'ㅎ'),
		new KeyData(72, 'ㅗ'),
		new KeyData(74, 'ㅓ'),
		new KeyData(75, 'ㅏ'),
		new KeyData(76, 'ㅣ'),
		new KeyData(186, ';'),
	],
	[	
		new KeyData(90, 'ㅋ'),
		new KeyData(88, 'ㅌ'),
		new KeyData(67, 'ㅊ'),
		new KeyData(86, 'ㅍ'),
		new KeyData(66, 'ㅠ'),
		new KeyData(78, 'ㅜ'),
		new KeyData(77, 'ㅡ'),
		new KeyData(188, ','),
		new KeyData(190, '.'),
	]
]

export default new Keyboard(keyRows)