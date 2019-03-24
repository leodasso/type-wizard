import Keyboard from '../../classes/keyboard';
import KeyData from '../../classes/keyData';

const keyRows = [
	[
		new KeyData(81, 'й'),
		new KeyData(87, 'ц'),
		new KeyData(69, 'у'),
		new KeyData(82, 'к'),
		new KeyData(84, 'е'),
		new KeyData(89, 'н'),
		new KeyData(85, 'г'),
		new KeyData(73, 'ш'),
		new KeyData(79, 'щ'),
		new KeyData(80, 'з'),
		new KeyData(219, 'х'),
		new KeyData(221, 'ъ'),
		new KeyData(220, 'ё'),

	],
	[	
		new KeyData(65, 'ф'),
		new KeyData(83, 'ы'),
		new KeyData(68, 'в'),
		new KeyData(70, 'а'),
		new KeyData(71, 'п'),
		new KeyData(72, 'р'),
		new KeyData(74, 'о'),
		new KeyData(75, 'л'),
		new KeyData(76, 'д'),
		new KeyData(186, 'ж'),
		new KeyData(222, 'э'),

	],
	[	
		new KeyData(90, 'я'),
		new KeyData(88, 'ч'),
		new KeyData(67, 'с'),
		new KeyData(86, 'м'),
		new KeyData(66, 'и'),
		new KeyData(78, 'т'),
		new KeyData(77, 'ь'),
		new KeyData(188, 'б'),
		new KeyData(190, 'ю'),
	]
]


const previewRows = [
	[
		new KeyData(81, 'й'),
		new KeyData(87, 'ц'),
		new KeyData(69, 'у'),
		new KeyData(82, 'к'),
		new KeyData(84, 'е'),
	],
	[	
		new KeyData(65, 'ф'),
		new KeyData(83, 'ы'),
		new KeyData(68, 'в'),
		new KeyData(70, 'а'),
	],
]

export default new Keyboard(keyRows, 8, "Russian", previewRows)