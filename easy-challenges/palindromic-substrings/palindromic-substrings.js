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

function countPalindromes(str) {
    // write your code below
    let numberStrings = str.length;
    for (let i = 0; i < str.length; i++){
        for (let j = 2; j < str.length - i + 1; j++){
            let subString = str.slice(i, (i + j));
            if (isPalindrome(subString)){
                numberStrings ++;
            }
        }
    }
    return numberStrings;
}

module.exports = { countPalindromes };