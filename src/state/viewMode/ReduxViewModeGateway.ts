import { Dispatch } from 'redux';

import { ViewModeGateway } from '../../useCases/ViewModeGateway';
import { toggleViewMode } from './actions';

export function createReduxViewModeGateway (dispatch: Dispatch<{}>): ViewModeGateway {
  return {
    toggleViewMode () {
      dispatch(toggleViewMode());
    }
  };
}
