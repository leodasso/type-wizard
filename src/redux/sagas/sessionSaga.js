import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/**Fetches the user's gameplay sessions */
function* fetchSessions() {

	try {

		// the config includes credentials which
		// allow the server session to recognize the user
		const config = {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
		};

		const response = yield axios.get('api/session', config);

		console.log(response.data);
		yield put({type: 'SET_SESSIONS', payload:response.data})

	} catch (error) {
		console.log('User get request failed', error);
	}
}

function* sessionSaga() {
	yield takeLatest('FETCH_SESSIONS', fetchSessions);
}

export default sessionSaga;
