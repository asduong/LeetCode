/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let sequenceNum = sortedArr[1] - sortedArr[0];
  for (let i = 2; i < sortedArr.length; i++) {
    if (sortedArr[i] - sortedArr[i - 1] !== sequenceNum) {
      return false;
    }
  }
  return true;
};

let arr = [1, 2, 4];
let arr2 = [3, 5, 1];

console.log(canMakeArithmeticProgression(arr));
console.log(canMakeArithmeticProgression(arr2));
