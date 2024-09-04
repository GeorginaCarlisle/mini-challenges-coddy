function isPalindrome(num) {
  // Convert number into a iterable string
  const numString = num.toString();
  /**
   * Iterate through the first half of the string comparing numbers in opposite positions
   * If the numbers are not equal return false
   */ 
  for (let i = 0; i < numString.length / 2; i++){
      // j represents the index of the opposite number
      let j = numString.length - 1 - i;
      if (numString[i] != numString[j]){
          return false;
      }
  }
  return true;
}