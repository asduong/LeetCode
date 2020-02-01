/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  let numsObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!numsObj[arr[i]]) {
      numsObj[arr[i]] = 1;
    } else {
      numsObj[arr[i]] += 1;
    }
  }
  for (let key in numsObj) {
    if (numsObj[key] / arr.length > 0.25) {
      return parseInt(key);
    }
  }
  return 0;
};

let arr = [1, 2, 3, 3];
console.log(findSpecialInteger(arr));
