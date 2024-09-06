function longestCommonPrefix(a) {
  let commonPrefix = '';
  // Recrusive function to loop through all the strings, one index at a time
  function prefixHunt(i = 0, prefix = '') {
    // Sets the character to be matched with at the given index
    let newPrefix = a[0][i];
    let matching = true;
    // For the given index loops through each string checking if the character matches
    for (let j = 0; j < a.length; j++){
      // As soon as a mismatch is encountered loop is broken and commonPrefix set
      if (a[j][i] !== newPrefix){
        commonPrefix = prefix;
        matching = false;
        break;
      }
    }
    if (matching === true){
      // If everything matched at this index rerun the function for the next index with adjusted prefix
      prefix = `${prefix}${newPrefix}`;
      prefixHunt(i + 1, prefix);
    }
  }
  prefixHunt();
  return commonPrefix;
}

module.exports = { longestCommonPrefix }