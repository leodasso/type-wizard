/** reducer for the user's play sessions */
const sessions = (state = [], action) => {
  switch (action.type) {

    case 'SET_SESSIONS': return action.payload;
    
    default: return state;
  }
};

export default sessions;