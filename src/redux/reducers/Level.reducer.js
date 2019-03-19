import GameLevel from '../../classes/GameLevel';

const defaultLevel = new GameLevel(1, 5, 60);

/**Keeps track of the current level. The state is the full level object. */
const currentLevel = (state = defaultLevel, action) => {
  switch (action.type) {
    case 'SET_LEVEL':
      return action.payload;
    default:
      return state;
  }
};

export default currentLevel;