import * as React from 'react';
import { CounterViewData } from '../CounterViewData';

interface CounterWidgetProps {
  counter: CounterViewData;
  increment(): void;
  decrement(): void; 
}

export const CounterWidget = (props: CounterWidgetProps) => {
  const { counter, increment, decrement } = props;

  return (
    <div>
      <h1>
        {counter.value}
      </h1>

      <div>
        <button onClick={increment}>
          +
        </button>

        <button onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};
