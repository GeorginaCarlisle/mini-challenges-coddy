const { occurMax } = require("./mode");

test('Arrays with 1 integer that occurs the most returns that integer', () => {
  expect(occurMax([1, 6, 2, 6, 7])).toBe(6);
})

test('Arrays with multiple integers that occurs the most returns the integer that is first in the original array', () => {
  expect(occurMax([4, 2, 1, 2, 5, 2, 1, 6, 34, 1])).toBe(2);
})
