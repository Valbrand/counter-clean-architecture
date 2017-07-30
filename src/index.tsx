import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CounterPage from './counters/pages/CounterPage';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { createReduxCounterGateway } from './counters/redux/ReduxCounterGateway';
import { createReduxViewModeGateway } from './viewMode/redux/ReduxViewModeGateway';
import { createChangeCounterInteractor } from './counters/useCases/ChangeCounterInteractor';
import { createToggleViewModeInteractor } from './viewMode/useCases/ToggleViewModeInteractor';
import './index.css';

const counterGateway = createReduxCounterGateway(store.dispatch);
const changeCounterInteractor = createChangeCounterInteractor(counterGateway);

const viewModeGateway = createReduxViewModeGateway(store.dispatch);
const toggleViewModeInteractor = createToggleViewModeInteractor(viewModeGateway);

ReactDOM.render(
  <Provider store={store}>
    <CounterPage
      changeCounterInteractor={changeCounterInteractor}
      toggleViewModeInteractor={toggleViewModeInteractor}
    />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
