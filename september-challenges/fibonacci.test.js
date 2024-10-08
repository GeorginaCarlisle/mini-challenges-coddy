const { fibo } = require('./fibonacci');

test.each([
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8]
])('fibo returns the value of the nth number', (input, expected) => {
  expect(fibo(input)).toBe(expected);
});