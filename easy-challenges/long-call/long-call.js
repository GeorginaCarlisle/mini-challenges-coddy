function longCall(str, n) {
  // Write code here
  let longString = "";
  if (n < 1){
    return "";
  }
  for (let i = 0; i < str.length; i++){
    if (!str[i].match(/[a-z]/i)){
      longString += str[i];
    } else if (str[i].match(/[a||e||i||o||u]/i)){
      for (let j = 0; j < n + 1; j++){
        longString += str[i];
      }
    } else {
      for (let j = 0; j < n; j++){
        longString += str[i];
      }
    }
  }
  return longString;
}

module.exports = { longCall };