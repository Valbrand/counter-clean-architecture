import { createStore, combineReducers } from 'redux';

import { counterReducer, CounterState } from './counters/redux/reducer';
import { viewModeReducer, ViewModeState } from './viewMode/redux/reducer';

export type StoreState = {
  counter: CounterState
  viewMode: ViewModeState
};

const rootReducer = combineReducers({
  counter: counterReducer,
  viewMode: viewModeReducer
});

export default createStore(rootReducer);
