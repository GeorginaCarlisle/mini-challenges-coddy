const { titleCase } = require("./title-case");

test('Correctly cased strings are returned unaltered', () => {
  expect(titleCase('A Correctly Cased Title')).toBe('A Correctly Cased Title');
})

test('Strings return with first letter of each word capitalised', () => {
  expect(titleCase('an incorrect title')).toBe('An Incorrect Title');
})