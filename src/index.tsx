import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CounterPage from './counters/pages/CounterPage';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { createReduxCounterGateway } from './counters/redux/ReduxCounterGateway';
import { createChangeCounterInteractor } from './counters/useCases/ChangeCounterInteractor';
import './index.css';

const counterGateway = createReduxCounterGateway(store.dispatch);
const changeCounterInteractor = createChangeCounterInteractor(counterGateway);

ReactDOM.render(
  <Provider store={store}>
    <CounterPage changeCounterInteractor={changeCounterInteractor}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
