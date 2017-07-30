import { Dispatch } from 'redux';

import { CounterGateway } from '../gateways/CounterGateway';
import { increment, decrement } from './actions';

export function createReduxCounterGateway (dispatch: Dispatch<{}>): CounterGateway {
  return {
    increment () {
      dispatch(increment());
    },

    decrement () {
      dispatch(decrement());
    }
  };
}