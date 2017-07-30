import { CounterGateway } from './CounterGateway';

export interface ChangeCounterInteractor {
  increment(): void;
  decrement(): void;
}

export function createChangeCounterInteractor(counterGateway: CounterGateway): ChangeCounterInteractor {
  return {
    increment() {
      counterGateway.increment();
    },

    decrement() {
      counterGateway.decrement();
    }
  };
}
