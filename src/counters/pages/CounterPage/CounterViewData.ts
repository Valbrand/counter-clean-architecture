import Counter from '../../entities/Counter';

export interface CounterViewData {
  value: number;

  asRomanNumeral(): string;
}

export function createCounterViewData(counter: Counter): CounterViewData {
  return {
    value: counter,

    asRomanNumeral (): string {
      return romanize(counter);
    }
  };
}

function romanize (n: number): string {
  const romanDigits: [string, number][] = [ ['CM', 900], ['D', 500], ['C', 100], ['XC', 90], ['L', 50], ['X', 10], ['IX', 9], ['V', 5], ['I', 1] ];

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
