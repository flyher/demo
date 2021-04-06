import { combineReducers, createStore } from 'redux';

import { sdlpalLibReducer, initialStateSdlpalLib } from './modules/sdlpal-lib';
const allReducers = combineReducers({
  sdlpallib: sdlpalLibReducer
});

const store = createStore(allReducers, {
  sdlpallib: initialStateSdlpalLib
});

export default store;
