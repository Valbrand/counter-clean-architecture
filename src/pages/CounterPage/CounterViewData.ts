import { Counter } from '../../entities/Counter';
import { ViewMode } from '../../entities/ViewMode';
import romanize from '../../utils/romanize';

export interface CounterViewData {
  value: string;
  viewModeButtonText: string;
}

export function createCounterViewData (counter: Counter, viewMode: ViewMode): CounterViewData {
  return {
    get value(): string {
      switch (viewMode) {
        case ViewMode.regular:
          return counter.toString();
        case ViewMode.roman:
          return romanize(counter);
        default:
          throw new Error('Unexpected view mode');
      }
    },

    get viewModeButtonText(): string {
      switch (viewMode) {
        case ViewMode.regular:
          return 'Change to roman numbers';
        case ViewMode.roman:
          return 'Change to Hindu-Arabic numbers';
        default:
          throw new Error('Unexpected view mode');
      }
    }
  };
}
