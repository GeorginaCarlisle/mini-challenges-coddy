const { longestCommonPrefix } = require("./common-prefix");

test('Returns common prefix', () => {
  expect(longestCommonPrefix(['something', 'somehow', 'somewhat'])).toBe('some');
  expect(longestCommonPrefix(['minimun', 'maximum', 'max', 'mini'])).toBe('m');
})
