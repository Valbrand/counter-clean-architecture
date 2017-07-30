import { Dispatch } from 'redux';

import { CounterGateway } from '../../useCases/CounterGateway';
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
