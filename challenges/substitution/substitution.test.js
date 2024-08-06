const { substitution } = require("./substitution");

test('Function to encrypt text based on given key', () => {
  expect(substitution('QAZWSXEDCRFVTGBYHNUJMIKLOP', '?/Hello!!')).toBe('?/Dsvvb!!');
})
  