const { isPalindrome } = require("./palindrome.js");

test("isPalindrome returns true if word same reversed", () => {
  expect(isPalindrome("level")).toBe(true);
})

test("isPalindrome returns false if word reversed is different", () => {
  expect(isPalindrome("levels")).toBe(false);
})