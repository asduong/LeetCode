/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] < 0) {
      sortedNums.shift();
      i -= 1;
      continue;
    } else if (sortedNums[0] > 1) {
      return 1;
    } else if (
      sortedNums[i + 1] - sortedNums[i] > 1 ||
      i === sortedNums.length - 1
    ) {
      return sortedNums[i] + 1;
    }
  }
  return 1;
};

let nums = [-1, 1000];
let nums2 = [
  11,
  -6,
  -4,
  -7,
  20,
  57,
  57,
  18,
  61,
  41,
  3,
  33,
  30,
  58,
  17,
  46,
  14,
  55,
  -3,
  -6,
  23,
  9,
  26,
  -5,
  27,
  57,
  26,
  44,
  -4,
  36,
  36,
  17,
  56,
  59,
  20,
  14,
  54,
  31,
  42,
  53,
  11,
  -1,
  41,
  51,
  11,
  12,
  36,
  51,
  5,
  59,
  56,
  55,
  6,
  36,
  60,
  59,
  31,
  40,
  41,
  37,
  30,
  32
];

console.log(firstMissingPositive(nums));
console.log(firstMissingPositive(nums2));
