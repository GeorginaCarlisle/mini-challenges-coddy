function capitalize(s) {
  // Convert string into an array of words
  let strArray = s.split(" ")
  // Carry out capitalizeword logic for each word in the array
  const capitalisedArr = strArray.map(word => capitalizeWord(word));
  // Join the words in the array back into a string
  return capitalisedArr.join(" ");
}

function capitalizeWord(word){
  // Capitalize the first character in the word
  return word.charAt(0).toUpperCase() + word.slice(1);
}