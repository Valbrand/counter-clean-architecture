import * as React from 'react';
import { CounterViewData } from '../CounterViewData';
import { ChangeCounterInteractor } from '../../../useCases/ChangeCounterInteractor';

interface CounterWidgetProps {
  counter: CounterViewData;
  changeCounterInteractor: ChangeCounterInteractor;
}

export const CounterWidget = (props: CounterWidgetProps) => {
  const { counter, changeCounterInteractor } = props;

  return (
    <div>
      <h1>
        {counter.value}
      </h1>

      <div>
        <button onClick={changeCounterInteractor.increment}>
          +
        </button>

        <button onClick={changeCounterInteractor.decrement}>
          -
        </button>
      </div>
    </div>
  );
};
