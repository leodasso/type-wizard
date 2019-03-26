import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import ableKeys from './EnabledKeys.reducer';
import shifted from './Shifted.reducer';
import pressedKeys from './PressedKeys.reducer';
import currentLevel from './Level.reducer';
import gameEvents from './GameEvents.reducer';
import keyboard from './Keyboard.reducer';
import sessions from './Sessions.reducer'
import currentTutorial from './Tutorial.reducer';
import keyDivs from './KeyDivs.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
	errors,			// contains registrationMessage and loginMessage
	loginMode, 		// will have a value of 'login' or 'registration' to control which screen is shown
	user, 			// will have an id and username if someone is logged in
	ableKeys,		// An array of keycodes for the keys currently enabled. 
	shifted,		// Keep track of when the user has the shift key(s) held in
	pressedKeys,	// keep track of which keys are pressed (other than shift)
	currentLevel,	// The current level's full info
	gameEvents,		// An array of all the game events for a session
	keyboard,		// the current keyboard layout
	sessions,		// the user's play sessions history
	currentTutorial,
	keyDivs,		// An array of the dom elements for the enabled keys. Notably,
					// this is different from the array of enabled keycodes.
});

export default rootReducer;
