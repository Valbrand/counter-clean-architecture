import Counter from '../../entities/Counter';
import { ViewMode } from '../../../viewMode/ViewMode';

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

function romanize (n: number): string {
  const romanDigits: [string, number][] = [
    ['CM', 900], 
    ['D', 500], 
    ['CD', 400], 
    ['C', 100], 
    ['XC', 90], 
    ['L', 50], 
    ['XL', 40], 
    ['X', 10], 
    ['IX', 9], 
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  if (n === 0) {
    return 'N';
  }

  return romanDigits.reduce(
    (partialValue, [ romanDigit, value ], index) => {
      while (n >= value) {
        partialValue = partialValue + romanDigit;
        n -= value;
      }

      return partialValue;
    },
    '');
}
