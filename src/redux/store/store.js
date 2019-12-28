import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "../reducers/rootReducers";
import forbiddenWordsMiddleware from "../middleware/middleware";
import appSaga from '../saga/appSaga';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	storeEnhancers(applyMiddleware(
		forbiddenWordsMiddleware,
		initialiseSagaMiddleware
	))
);

initialiseSagaMiddleware.run(appSaga);

export default store;