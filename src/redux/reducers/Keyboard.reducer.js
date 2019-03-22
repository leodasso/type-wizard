import english from '../../data/keyboard-layouts/english-us';

const currentLayout = (state = english, action) => {
  switch (action.type) {
    case 'SET_LAYOUT':
      return action.payload;
    default:
      return state;
  }
};

export default currentLayout;