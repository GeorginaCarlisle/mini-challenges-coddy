const { mergeSortedArrays } = require('./merge-and-sort');

test('Arrays of same length combined and ordered', () => {
  expect(mergeSortedArrays([2, 7, 9], [3, 5, 6])).toEqual([2, 3, 5, 6, 7, 9]);
})

test('Arrays of different length combined and ordered', () => {
  expect(mergeSortedArrays([7, 9], [1, 2, 3, 5, 6])).toEqual([1, 2, 3, 5, 6, 7, 9]);
})