import { ViewModeActionTypes } from './types';

type ToggleViewModeAction = {
  type: ViewModeActionTypes.TOGGLE_VIEW_MODE
};

export type ViewModeAction =
  ToggleViewModeAction;

export function toggleViewMode (): ToggleViewModeAction {
  return {
    type: ViewModeActionTypes.TOGGLE_VIEW_MODE
  };
}
