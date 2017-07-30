import { CounterActionTypes } from './types';

type IncrementAction = {
  type: CounterActionTypes.INCREMENT
};

type DecrementAction = {
  type: CounterActionTypes.DECREMENT
};

export type CounterAction = 
  IncrementAction
  | DecrementAction;

export function increment(): IncrementAction {
  return {
    type: CounterActionTypes.INCREMENT
  };
}

export function decrement(): DecrementAction {
  return {
    type: CounterActionTypes.DECREMENT
  };
}
