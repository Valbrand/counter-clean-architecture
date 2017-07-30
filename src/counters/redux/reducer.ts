import Counter from '../entities/Counter';
import { CounterAction } from './actions';
import { CounterActionTypes } from './types';

export type CounterState = Counter;

const initialState: CounterState = Counter.of();

export function counterReducer (state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return state + 1;
    case CounterActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}