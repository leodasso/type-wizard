import levels from '../../data/levels/levels'

/**Keeps track of the current level. The state is the full level object. */
const currentLevel = (state = levels[0](), action) => {
  switch (action.type) {
    case 'SET_LEVEL':
      return action.payload;
    default:
      return state;
  }
};

export default currentLevel;