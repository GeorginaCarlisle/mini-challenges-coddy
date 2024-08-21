function mergeSortedArrays(arr1, arr2) {
  // write your code below
  let sortedArray = [];
  while (arr1.length && arr2.length){
      if (arr1[0] < arr2[0]){
          sortedArray.push(arr1.shift());
      } else if (arr2[0] < arr1[0]){
          sortedArray.push(arr2.shift());
      } else if (arr1[0] === arr2[0]){
          sortedArray.push(arr1.shift());
          sortedArray.push(arr2.shift());
      }
      if (!arr1.length){
          while (arr2.length){
            sortedArray.push(arr2.shift());
          }
      } else if (!arr2.length){
          while (arr1.length){
          sortedArray.push(arr1.shift());
        }
      }
  }
  return sortedArray;
}

module.exports = { mergeSortedArrays };