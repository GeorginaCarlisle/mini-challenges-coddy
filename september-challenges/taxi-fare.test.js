const { taxiFare } = require("./taxi-fare");

test.each([
  [[1], 20, 30],
  [[3, 2], 20, 70],
  [[1, 7, 2], 30, 130],
])('taxiFare multiples distances by 10 and adds base fare', (distances, baseFare, expected) => {
  expect(taxiFare(distances, baseFare)).toBe(expected);
});