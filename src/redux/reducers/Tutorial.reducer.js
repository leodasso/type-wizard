import React from 'react';

const defaultComponent = (<div></div>);

/**Current tutorial is a react component. The default state is just an empty div.
 * This component is passed into the reducer by level chapters, since they might have a specific
 * tutorial belonging to that chapter.
 */
const currentTutorial = (state = defaultComponent, action) => {
  switch (action.type) {
    case 'SET_TUTORIAL':
      return action.payload;
    default:
      return state;
  }
};

export default currentTutorial;