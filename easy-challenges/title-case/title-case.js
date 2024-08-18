function titleCase(sentence) {
  // write your code below
  let arrayWords = sentence.split(" ");
  let alteredArray = [];
  for (let i = 0; i < arrayWords.length; i++){
      const word = arrayWords[i];
      const newWord = word.charAt(0).toUpperCase() + word.slice(1);
      alteredArray.push(newWord);
  }
  return alteredArray.join(" ");
}

module.exports = { titleCase };