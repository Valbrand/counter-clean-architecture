import * as React from 'react';
import { CounterViewData } from '../CounterViewData';

interface CounterWidgetProps {
  counter: CounterViewData;
  showRomanNumeral: boolean;
  increment(): void;
  decrement(): void; 
}

const CounterWidget = (props: CounterWidgetProps) => {
  const { counter, showRomanNumeral, increment, decrement } = props;
  const counterValueText = showRomanNumeral ? counter.asRomanNumeral() : counter.value;

  return (
    <div>
      <h1>
        {counterValueText}
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

export default CounterWidget;