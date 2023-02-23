import {configureStore} from '@reduxjs/toolkit'; 

import {createStore} from 'redux';

import productReducers from './reduxapp/reducers/reducers';

//const store = configureStore(productReducers);
const store = createStore(productReducers);
export default store;