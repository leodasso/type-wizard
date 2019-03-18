// Keeps track if the user has the shift key(s) held in. The state
// is an integer representing how many shift keys are currently pressed.
// unless there is some serious changes to keyboard layouts, this will 
// likely be between 0 - 2
const shifted = (state = 0, action) => {
  switch (action.type) {
    case 'SET_SHIFTED':
      return state + action.delta;
    default:
      return state;
  }
};

export default shifted;