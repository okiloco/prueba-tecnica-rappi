import { createStore, applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga'
import rootSage from '../sagas';
import rootReducers from '../reducers'
const sagaMiddleware = reduxSaga();


export default () => {
    return {
        ...createStore(rootReducers, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSage)
    }
}