import * as React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../../store';
import { CounterViewData, createCounterViewData } from './CounterViewData';
import { CounterWidget } from './components/CounterWidget';
import { ChangeCounterInteractor } from '../../useCases/ChangeCounterInteractor';

type CounterPageProps = {
  changeCounterInteractor: ChangeCounterInteractor;
  counter: CounterViewData;
};

const mapStateToProps = (state: StoreState): Partial<CounterPageProps> => {
  return {
    counter: createCounterViewData(state.counter)
  };
};

class CounterPage extends React.Component<CounterPageProps, {}> {
  render () {
    const {
      counter,
      changeCounterInteractor
    } = this.props;

    return (
      <div>
        <h1>Clean Architecture Sample</h1>
        <CounterWidget
          counter={counter}
          increment={changeCounterInteractor.increment}
          decrement={changeCounterInteractor.decrement}
        />
      </div>
    );
  }
}

export default connect<{}, {}, Partial<CounterPageProps>>(mapStateToProps)(CounterPage);
