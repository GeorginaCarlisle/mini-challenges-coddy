const { beachWavePattern } = require('./beach-wave');

test('No transformations correctly returns initial wave as single string in array', () => {
  expect(beachWavePattern([2, 1, 2])).toEqual(['2,1,2']);
})

test('One positive transformation correctly returns waveRecord array', () => {
  expect(beachWavePattern([2, 1, 2], [[1, 1]])).toEqual(['2,1,2', '2,2,2']);
})

test('Multiple transformations correctly return waveRecord array', () => {
  expect(beachWavePattern([2, 1, 2], [[1, 1], [0, 2], [2, 1]])).toEqual(['2,1,2', '2,2,2', '4,2,2', '4,2,3']);
})

test('Negative transformation correctly returns waveRecord array', () => {
  expect(beachWavePattern([2, 1, 2], [[1, 1], [0, 2], [2, -1]])).toEqual(['2,1,2', '2,2,2', '4,2,2', '4,2,1']);
})