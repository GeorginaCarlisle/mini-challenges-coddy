const { areAnagrams } = require("./anagrams");

test('True returned when the strings are anagrams', () => {
  expect(areAnagrams('listen', 'silent')).toBe(true);
})

test('False returned when the strings are different lengths', () => {
  expect(areAnagrams('listening', 'silent')).toBe(false);
})

test('False returned when the strings are not anagrams', () => {
  expect(areAnagrams('listen', 'advent')).toBe(false);
})