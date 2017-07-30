import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';
import CounterPage from './pages/CounterPage';
import { createReduxCounterGateway } from './state/counter/ReduxCounterGateway';
import { createReduxViewModeGateway } from './state/viewMode/ReduxViewModeGateway';
import { createChangeCounterInteractor } from './useCases/ChangeCounterInteractor';
import { createToggleViewModeInteractor } from './useCases/ToggleViewModeInteractor';

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
