import { ViewModeActionTypes } from './types';
import { ViewModeAction } from './actions';
import { ViewMode } from '../ViewMode';

export type ViewModeState = ViewMode;

const initialState: ViewModeState = ViewMode.regular;

export function viewModeReducer (state: ViewModeState = initialState, action: ViewModeAction): ViewModeState {
  switch (action.type) {
    case ViewModeActionTypes.TOGGLE_VIEW_MODE:
      return otherViewMode(state);
    default:
      return state;
  }
}

function otherViewMode (currentViewMode: ViewMode): ViewMode {
  if (currentViewMode === ViewMode.regular) {
    return ViewMode.roman;
  } else {
    return ViewMode.regular;
  }
}