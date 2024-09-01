const { longestWord } = require('./longest-word.js');

test('longestWord returns the longest word in the string', () => {
  expect(longestWord("A random string with one exceptionally long word")).toBe("exceptionally");
})