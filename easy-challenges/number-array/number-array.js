function arrayNumbers (maxLevels){
  let array = [1, ];
  for (let m = 2; m < maxLevels + 1; m++){
    for (let n = 0; n < m; n++){
      let newNumber = array[array.length - 1] + 2;
      if (newNumber % 5 === 0){
        if (newNumber !== 5){
          newNumber += 2;
        }
      }
      array.push(newNumber);
    }
  }
  return array;
}

module.exports = { arrayNumbers };

