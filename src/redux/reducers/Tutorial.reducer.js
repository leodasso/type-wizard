import React from 'react';

const defaultComponent = (<div></div>);

const currentTutorial = (state = defaultComponent, action) => {
  switch (action.type) {
    case 'SET_TUTORIAL':
      return action.payload;
    default:
      return state;
  }
};

export default currentTutorial;