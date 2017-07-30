import { createStore, combineReducers } from 'redux';

import { counterReducer, CounterState } from './state/counter/reducer';
import { viewModeReducer, ViewModeState } from './state/viewMode/reducer';

export type StoreState = {
  counter: CounterState
  viewMode: ViewModeState
};

const rootReducer = combineReducers({
  counter: counterReducer,
  viewMode: viewModeReducer
});

export default createStore(rootReducer);
