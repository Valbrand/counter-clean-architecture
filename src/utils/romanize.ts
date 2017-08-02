export default function romanize (n: number): string {
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
    return 'nulla';
  }

  if (n < 0) {
    return `Romans did not have symbols for negative numbers! (current value is ${n})`;
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
