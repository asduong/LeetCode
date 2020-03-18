/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let numCounter = nums[0];
  let iCounter = 0;
  let counter = 0;
  let arr = [];
  for (let i = 1; i < nums.length; i++) {
    if (numCounter > nums[i]) {
      counter++;
    }
    if (iCounter > nums.length - 1) {
      return arr;
    }
    if (i == nums.length - 1) {
      i = -1;
      iCounter += 1;
      numCounter = nums[iCounter];
      arr.push(counter);
      counter = 0;
    }
  }
  return arr;
};

let arr = [1, 2, 2, 1, 1, 3, 4, 5];
console.log(smallerNumbersThanCurrent(arr));
