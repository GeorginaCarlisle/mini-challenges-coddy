const { longCall } = require("./long-call");

test('Constants are repeated n number of times', () => {
  expect(longCall('ch', 3)).toBe('ccchhh');
})

test('Empty string is returned if n=0 or n is negative', () => {
  expect(longCall('chips', 0)).toBe('');
  expect(longCall('chips', -2)).toBe('');
})

test('Vowels are repeated n + 1 times', () => {
  expect(longCall('hello', 2)).toBe('hheeellllooo');
})

test('None letter characters are not repeated', () => {
  expect(longCall('hello everyone!', 2)).toBe('hheeellllooo eeevveeerryyooonneee!');
})