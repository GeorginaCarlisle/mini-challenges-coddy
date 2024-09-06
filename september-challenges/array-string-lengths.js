function lens(arr) {
  // map arr into a new array, where each word is transformed into it's length
  const arrLengths = arr.map(word => word.length);
  return arrLengths;
}