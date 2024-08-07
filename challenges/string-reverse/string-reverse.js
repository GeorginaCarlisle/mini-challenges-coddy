function reverseString(str) {
  let strArray = str.split("");
  strArray.reverse();
  return strArray.join('');
}

module.exports = { reverseString };