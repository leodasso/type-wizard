import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import ableKeys from './EnabledKeys.reducer';
import shifted from './Shifted.reducer';
import pressedKeys from './PressedKeys.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
	errors,			// contains registrationMessage and loginMessage
	loginMode, 		// will have a value of 'login' or 'registration' to control which screen is shown
	user, 			// will have an id and username if someone is logged in
	ableKeys,		// We want to be able to change which keys are enabled/disabled
	shifted,		// Keep track of when the user has the shift key(s) held in
	pressedKeys,	// keep track of which keys are pressed (other than shift)
});

export default rootReducer;
