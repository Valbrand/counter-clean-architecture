import { createStore, combineReducers } from 'redux';

import { counterReducer, CounterState } from './counters/redux/reducer';

export type StoreState = {
  counter: CounterState
}

const rootReducer = combineReducers({
  counter: counterReducer
});

export default createStore(rootReducer);
