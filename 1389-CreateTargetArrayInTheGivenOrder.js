/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let targetArr = [];
  for (let i = 0; i < nums.length; i++) {
    targetArr.splice(index[i], 0, nums[i]);
  }
  return targetArr;
};
