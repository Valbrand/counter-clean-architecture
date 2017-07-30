import Counter from '../../entities/Counter';
import { ViewMode } from '../../../viewMode/ViewMode';

export interface CounterViewData {
  value: string;
}

export function createCounterViewData (counter: Counter, viewMode: ViewMode = ViewMode.regular): CounterViewData {
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
    }
  };
}

function romanize (n: number): string {
  const romanDigits: [string, number][] = [
    ['CM', 900], ['D', 500], ['C', 100], ['XC', 90], ['L', 50], ['X', 10], ['IX', 9], ['V', 5], ['I', 1]
  ];

  return romanDigits.reduce(
    (partialValue, [ romanDigit, value ]) => {
      while (n >= value) {
        partialValue = partialValue + romanDigit;
        n -= value;
      }

      return partialValue;
    },
    '');
}
