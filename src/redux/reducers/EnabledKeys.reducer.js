const defaultKeys = [65, 83, 68, 70, 74, 75, 76, 186];

const enabledKeys = (state = defaultKeys, action) => {
  switch (action.type) {
    case 'SET_ENABLED_KEYS':
      return action.payload;
    default:
      return state;
  }
};

export default enabledKeys;