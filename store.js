import {configureStore} from '@reduxjs/toolkit'; 

import {createStore, applyMiddleware} from 'redux';
// import the createSalaMiddleware so that the current app can use it
import createSagaMiddleware from 'redux-saga';
import productReducers from './reduxapp/reducers/reducers';
import rootSaga from './reduxapp/saga/sagas';

// create a Saga Middleware Object
// Initialization the Middleware for the current store and hence the application
const sagaMiddleware = createSagaMiddleware();


//const store = configureStore(productReducers);
const store = createStore(productReducers,applyMiddleware(sagaMiddleware));
// keep the SAGA Middleware running at application level
sagaMiddleware.run(rootSaga); 


export default store;