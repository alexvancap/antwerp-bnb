import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, createStore } from 'redux';
import indexReducer from './Index.reducer';

// create a makeStore function
const makeStore = preloadState =>
  createStore(
    combineReducers(indexReducer),
    preloadState
  );

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});