// Keeps track of all the game events in a given game session
const gameEvents = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_GAME_EVENTS':
      return [];
    case 'ADD_EVENT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default gameEvents;