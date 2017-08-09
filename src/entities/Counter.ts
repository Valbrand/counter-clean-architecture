export type Counter = number;

export function createCounter(value: number = 0): Counter {
  return value;
}

export function increment(counter: Counter): Counter {
  return createCounter(counter + 1);
}

export function decrement(counter: Counter): Counter {
  return createCounter(counter - 1);
}
