function balancedContrast(arr, condition, str) {
  // Manipulates the given arr and str and returns both as an object
  const manipulatedArr = arrManipulate(arr, condition);
  const manipulatedStr = strManipulate(str);
  return {
    array: manipulatedArr,
    string: manipulatedStr
  }
}

function arrManipulate(arr, condition) {
  let manipulatedArr = arr;
  let length = manipulatedArr.length
  for (let i = 0; i < length; i++){
    // Replace numbers greater that the condition with the number held in the opposite place within the array
    if (manipulatedArr[i] > condition){
      manipulatedArr[i] = manipulatedArr[length - 1 - i];
    }
  }
  return manipulatedArr
}

function strManipulate(str) {
  // Reverses the string and passes each character through the characterConvert function
  let strArray = str.split("");
  strArray.reverse();
  for (let i = 0; i < strArray.length; i++){
    strArray[i] = characterConvert(strArray[i]);
  }
  return strArray.join("");
}

function characterConvert(letter){
  // Converts all letters a - m to upperCase and n - z to lowercase
  let convertedLetter = ""
  if (letter.match(/[a-m]/i)){
    convertedLetter = letter.toUpperCase()
  } else if (letter.match(/[n-z]/i)){
    convertedLetter = letter.toLowerCase();
  } else {
    convertedLetter = letter;
  }
  return convertedLetter;
}

module.exports = { balancedContrast, arrManipulate, strManipulate, characterConvert }