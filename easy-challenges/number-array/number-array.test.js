const { arrayNumbers } = require('./number-array.js');

test('array numbers works', () => {
  expect(arrayNumbers(5)).toEqual([1, 3, 5, 7, 9, 11, 13, 17, 19, 21, 23, 27, 29, 31, 33]);
})