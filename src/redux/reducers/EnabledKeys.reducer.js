
/** Add element and keycode for all keys which are currently
 */
const enabledKeys = (state = [], action) => {
  switch (action.type) {

    case 'CLEAR_KEYS': return [];
    case 'SET_KEYS': return action.payload;

    default:
      return state;
  }
};

export default enabledKeys;