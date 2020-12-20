/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
  const jump = n;
  const shuffledArr = [];
  if ((n = 0)) {
    return nums;
  }
  for (let i = 0; i < nums.length / 2; i++) {
    shuffledArr.push(nums[i], nums[i + jump]);
  }
  return shuffledArr;
};

const nums = [1, 1, 2, 2];
const n = 2;
console.log(shuffle(nums, n));
