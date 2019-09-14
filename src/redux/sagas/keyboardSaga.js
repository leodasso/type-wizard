import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import keyboardLayoutsList from '../../data/keyboard-layouts/layouts';

/**Fetches the user's gameplay sessions */
function* fetchKeyboardLayout() {

	try {

		// the config includes credentials which
		// allow the server session to recognize the user
		const config = {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
		};

		const response = yield axios.get('api/keyboard', config);

		// set a default keyboard in case there's an ID mismatch
		let kbLayout = keyboardLayoutsList[0];

		for (let layout of keyboardLayoutsList) {
			if (layout.id == response.data.keyboard_id) {
				kbLayout = layout;
				break;
			}
		}

		// store the response in the state
		yield put({type: 'SET_LAYOUT', payload:kbLayout})

	} catch (error) {
		console.log('Keyboard get request failed', error);
	}
}

function* setKeyboardLayout(action) {

	try {

		// the config includes credentials which
		// allow the server session to recognize the user
		const config = {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
		};

		const data = {
			kbId: action.payload.id,
		}

		yield axios.put('api/keyboard', data, config);

		yield put({ type:'SET_LAYOUT', payload: action.payload });

	} catch (error) {

	}
}

function* sessionSaga() {
	yield takeLatest('FETCH_KB', fetchKeyboardLayout);
	yield takeLatest('SET_KB', setKeyboardLayout)
}

export default sessionSaga;
