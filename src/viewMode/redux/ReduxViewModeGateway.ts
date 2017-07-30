import { Dispatch } from 'redux';

import { ViewModeGateway } from '../gateways/ViewModeGateway';
import { toggleViewMode } from './actions';

export function createReduxViewModeGateway (dispatch: Dispatch<{}>): ViewModeGateway {
  return {
    toggleViewMode () {
      dispatch(toggleViewMode());
    }
  };
}