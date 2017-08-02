export interface Counter {
  readonly value: number;

  increment(): Counter;
  decrement(): Counter;
}

export function createCounter(value: number = 0): Counter {
  return {
    value,

    increment (): Counter {
      return createCounter(value + 1);
    },

    decrement (): Counter {
      return createCounter(value - 1);
    }
  };
}
