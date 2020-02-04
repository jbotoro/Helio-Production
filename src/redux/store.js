import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
// import thunk from 'redux-thunk'
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga'
import {fetchCollectionsStart} from './shop/shop.sagas'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}



export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

sagaMiddleware.run(fetchCollectionsStart);

export default {store, persistor};