function occurMax(a) {
  let maxIn = a[0];
  let maxReps = 1;
  let occurObj = {};
  /**
   * Loop through the array counting the number of occurance for each integer encountered
   * and saving within the occurance object: occurObj */ 
  for (let i = 0; i < a.length; i++){
    let integer = a[i];
    if (occurObj[integer]){
      occurObj[integer]++;
      if (occurObj[integer] > maxReps){
          // check if a new max integer has been encountered and update variables
        maxReps = occurObj[integer];
        maxIn = integer;
      }
    } else {
      occurObj[integer] = 1;
    }
  }
  return maxIn;
}

module.exports = { occurMax }