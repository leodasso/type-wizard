
/** Contains an array of the key DOM elements
 */
const KeyDivs = (state = [], action) => {
  switch (action.type) {

    case 'CLEAR_KEY_DIVS': return [];

    // For enabling a key, if it's already in the state, we just 
    // ignore the action. Otherwise, we add the newly enabled key to the state.
    case 'ENABLE_KEY_DIV':
      for (const key of state) {
        if (key.keyCode === action.payload.id) {
          return state;
        }
      }
      return [...state, action.payload];

    // For disabling a key, we create a copy of the state
    // which has all the elements except the disabled key
    case 'DISABLE_KEY_DIV': 
      const newState = [];
      for (const key of state) {
        if (key.keyCode !== action.keyCode) {
          newState.push(key);
        }
      }
      return newState;

    default:
      return state;
  }
};

export default KeyDivs;