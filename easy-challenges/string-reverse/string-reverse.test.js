const { reverseString } = require("./string-reverse");

test("ReverseString returns string in reverse order", () => {
  expect(reverseString("Hello!")).toBe("!olleH");
})