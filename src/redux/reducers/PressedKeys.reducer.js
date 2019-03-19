const pressedKeys = (state = [], action) => {
	switch (action.type) {

		// The key released action is expected to have: 
		// {type: 'KEY_RELEASED', id:[myID]}
		case 'KEY_RELEASED':
		// Create a new state array
		let newState = [];
		for (const press of state) {

			// Add all the presses from the state except the key that was just pressed
			if (press.id !== action.id) {
				newState.push(press);
			}
		}
		return newState;


		
		case 'KEY_PRESSED':
			for (const press of state) {

				// If this key is already in the state, just ignore the press
				if (press.id === action.payload.id) {
					return state;
				}
			}

			// Add the new key press info
			return [...state, action.payload];
		default:
			return state;
	}
};

export default pressedKeys;