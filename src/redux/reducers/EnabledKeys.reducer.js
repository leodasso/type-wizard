
/** Add element and keycode for all keys which are currently
 */
const enabledKeys = (state = [], action) => {
  switch (action.type) {

    case 'CLEAR_KEYS': return [];
    // For enabling a key, if it's already in the state, we just 
    // ignore the action. Otherwise, we add the newly enabled key to the state.
    case 'ENABLE_KEY':
      for (const key of state) {
        if (key.keyCode === action.payload.keyCode) {
          return state;
        }
      }
      return [...state, action.payload];

    // For disabling a key, we create a copy of the state
    // which has all the elements except the disabled key
    case 'DISABLE_KEY': 
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

export default enabledKeys;