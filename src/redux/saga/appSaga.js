import {takeEvery, call, put} from "redux-saga/effects";

export default function* TodoWatcherSaga() {
	yield takeEvery("DATA_REQUESTED", TodoWorkerSaga);
}

function* TodoWorkerSaga() {
	try {
		const payload = yield call(getData);
		yield put({type: "DATA_LOADED", payload});
	} catch (e) {
		yield put({type: "API_ERRORED", payload: e});
	}
}

const getData = () => fetch("https://jsonplaceholder.typicode.com/posts")
	.then(response => response.json());
