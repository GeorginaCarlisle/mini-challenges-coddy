const { countPalindromes } = require('./palindromic-substrings');

test('Where no internal palindromic substrings, length of string returned', () => {
  expect(countPalindromes('hi')).toBe(2);
})

test('Correctly count palindrome substrings', () => {
  expect(countPalindromes('hello')).toBe(6);
  expect(countPalindromes('abba')).toBe(6);
})