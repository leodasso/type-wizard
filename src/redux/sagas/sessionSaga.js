import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/**Fetches the user's gameplay sessions */
function* fetchSessions() {

	console.log('fetching sessions');
	try {

		const config = {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
		};

		// the config includes credentials which
		// allow the server session to recognize the user
		const response = yield axios.get('api/session', config);

		console.log(response.data);

		// now that the session has given us a user object
		// with an id and username set the client-side user object to let
		// the client-side code know the user is logged in
		// yield put({ type: 'SET_USER', payload: response.data });
		// TODO put a new action for storing sessions

	} catch (error) {
		console.log('User get request failed', error);
	}
}

function* sessionSaga() {
	yield takeLatest('FETCH_SESSIONS', fetchSessions);
}

export default sessionSaga;
