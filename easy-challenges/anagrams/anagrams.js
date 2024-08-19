function areAnagrams(str1, str2) {
  if (str1.length !== str2.length){
    return false;
  };

  let array1 = str1.split("");
  let array2 = str2.split("");

  for (let i = 0; i < array1.length; i++){
    if (array2.includes(array1[i])){
      const index = array2.indexOf(array1[i]);
      array2.slice(index, 1);
    } else {
      return false;
    }
  }
  return true;
}

module.exports = { areAnagrams };