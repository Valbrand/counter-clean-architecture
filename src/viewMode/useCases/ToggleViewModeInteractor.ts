import { ViewModeGateway } from '../gateways/ViewModeGateway';

export interface ToggleViewModeInteractor {
  toggleViewMode(): void;
}

export function createToggleViewModeInteractor (viewModeGateway: ViewModeGateway): ToggleViewModeInteractor {
  return {
    toggleViewMode () {
      viewModeGateway.toggleViewMode();
    }
  };
}
