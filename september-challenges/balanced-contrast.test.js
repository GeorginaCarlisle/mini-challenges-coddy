const { balancedContrast, strManipulate, arrManipulate, characterConvert } = require("./balanced-contrast");

test('arrManipulator leaves elements less than the condition unchanged', () => {
  expect(arrManipulate([1, 30, 20], 40)).toEqual([1, 30, 20]);
})

test('arrManipulator swaps elements greater than the condition with the element in their reversed position', () => {
  expect(arrManipulate([1, 30, 20, 10], 20)).toEqual([1, 20, 20, 10]);
})

test('strManipulator reverses entire string', () => {
  expect(strManipulate("HELLo")).toBe("oLLEH");
})

test.each([
  ["a", "A"],
  ["C", "C"],
  ["f", "F"],
  ["M", "M"],
])('characterConvert switches letters "a" to "m" to uppercase', (input, expected) => {
  expect(characterConvert(input)).toBe(expected);
})

test.each([
  ["n", "n"],
  ["R", "r"],
  ["u", "u"],
  ["Z", "z"],
])('characterConvert switches letters "n" to "z" to lowercase', (input, expected) => {
  expect(characterConvert(input)).toBe(expected);
})

test('strManipulator reverses entire string and converts', () => {
  expect(strManipulate("hello")).toBe("oLLEH");
})

test('balancedContrast correctly returns object of converted array and string', () => {
  expect(balancedContrast([10, 20, 50, 40], 30, "Yo Man")). toEqual({array: [10, 20, 20, 10], string: "nAM oy"})
})