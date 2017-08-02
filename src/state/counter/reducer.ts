import { Counter, createCounter } from '../../entities/Counter';
import { CounterAction } from './actions';
import { CounterActionTypes } from './types';

export type CounterState = Counter;

const initialState: CounterState = createCounter();

export function counterReducer (state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return state.increment();
    case CounterActionTypes.DECREMENT:
      return state.decrement();
    default:
      return state;
  }
}
