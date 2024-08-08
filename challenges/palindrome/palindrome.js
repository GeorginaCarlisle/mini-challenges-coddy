const { reverseString } = require("../string-reverse/string-reverse");

function isPalindrome(str) {
  // write your code below
  let strArray = str.split("");
  strArray.reverse();
  reverseStr = strArray.join("");
  if (reverseStr === str){
      return true;
  } else {
      return false;
  }
}

module.exports = { isPalindrome };