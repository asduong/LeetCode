/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i += 2) {
    while (count < nums[i]) {
      arr.push(nums[i + 1]);
      count++;
    }
    count = 0;
  }
  return arr;
};

let nums = [1, 2, 3, 4];
// [2, 4, 4, 4];
console.log(decompressRLElist(nums));
