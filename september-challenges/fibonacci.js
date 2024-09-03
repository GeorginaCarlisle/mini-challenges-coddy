function fibo(i) {
  // Set the first two numbers of the sequence
  let num = 1;
  let lastNum = 0;
  // The first numbers within the fibonacci sequence are their index number
  if (i < 2){
      return i;
  }
  // Work up through the sequence by adding previous two numbers until the nth number is reached
  for (let j = 2; j <= i; j++){
      //calculate next number
      nextNum = num + lastNum;
      // reset num and last num ready for next iteration
      lastNum = num;
      num = nextNum;
  }
  return num;
}

module.exports = { fibo };