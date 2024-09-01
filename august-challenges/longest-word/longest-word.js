function longestWord(str) {
  const wordArray = str.split(" ");
  let longWord = "";
  let longWordLength = 0;
  for (let i = 0; i < wordArray.length; i++){
    if (wordArray[i].length > longWordLength){
      longWord = wordArray[i];
      longWordLength = wordArray[i].length;
    }
  }
  return longWord;
}

module.exports = { longestWord };