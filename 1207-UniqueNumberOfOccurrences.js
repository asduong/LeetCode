/**
 * @param {number[]} arr
 * @return {boolean}
 */

/*
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

 */
var uniqueOccurrences = function(arr) {
  let numsObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (numsObj[arr[i]]) {
      numsObj[arr[i]] += 1;
    } else {
      numsObj[arr[i]] = 1;
    }
  }
  let count = Object.values(numsObj);
  for (let i = 0; i < count.length - 1; i++) {
    if (count.indexOf(count[i], i + 1) > -1) {
      return false;
    }
  }
  return true;
};

let arr = [4, 6, 4, -8, 0, -7, 5, 7];
console.log(uniqueOccurrences(arr));
