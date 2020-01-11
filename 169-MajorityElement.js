/*
 * @param {number[]} nums
 * @return {number}
 */

/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
  let numsObj = {};
  let totalCounter = 0;
  let keyCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numsObj[nums[i]]) {
      numsObj[nums[i]] = 1;
    } else {
      numsObj[nums[i]] += 1;
    }
  }

  for (let key in numsObj) {
    if (numsObj[key] > totalCounter) {
      totalCounter = numsObj[key];
      keyCounter = key;
    }
  }
  return keyCounter;
};

let numsArr = [3, 2, 3];
console.log(majorityElement(numsArr));
