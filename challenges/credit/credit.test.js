const { validateCreditCard } = require("./credit");

describe('Function to Validate Credit Card number', () => {

  test('Card number of wrong length prints INVALID', () => {
    const logSpy = jest.spyOn(console, 'log');
    validateCreditCard(293816820835);
    expect(logSpy).toHaveBeenCalledWith('INVALID');
    logSpy.mockRestore(); //Cleans up spy after test
  })

  test('Card number that does not pass Luhn/s algorithmn prints INVALID', () => {
    const logSpy = jest.spyOn(console, 'log');
    validateCreditCard(5293816820835348);
    expect(logSpy).toHaveBeenCalledWith('INVALID');
    logSpy.mockRestore(); //Cleans up spy after test
  })

  test('Correct Mastercard number prints MASTERCARD', () => {
    const logSpy = jest.spyOn(console, 'log');
    validateCreditCard(5418878773156819);
    expect(logSpy).toHaveBeenCalledWith('MASTERCARD');
    logSpy.mockRestore(); //Cleans up spy after test
  })
})