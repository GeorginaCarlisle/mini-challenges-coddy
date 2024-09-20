function beachWavePattern(initialWave, transforms) {
  // Initialise an array to keep track of the wave transforming
  let arrayRecord = [initialWave];
  if (transforms){
    // carry out one transformation at a time
    for (let j = 0; j < transforms.length; j++){
      // create new wave initially the same as previous and locate needed variables
      let currentWave = [...arrayRecord[j]];
      let changeIndex = transforms[j][0];
      let changeHeight = transforms[j][1];
      // alter wave as per variables
      currentWave[changeIndex] = currentWave[changeIndex] + changeHeight;
      // add new altered wave to the array record
      arrayRecord.push(currentWave);
    }
  }
  return createWaveString(arrayRecord);
}

function createWaveString(arrayRecord){
  // Converts array of wave arrays into an array of wave strings
  let waveRecord = [];
  for (let i = 0; i < arrayRecord.length; i++){
    waveRecord.push(arrayRecord[i].join(","));
  }
  return waveRecord;
}

module.exports = { beachWavePattern }