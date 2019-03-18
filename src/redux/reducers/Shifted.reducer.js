// Keeps track if the user has the shift key(s) held in
const shifted = (state = false, action) => {
  switch (action.type) {
    case 'SET_SHIFTED':
      return action.payload;
    default:
      return state;
  }
};

export default shifted;