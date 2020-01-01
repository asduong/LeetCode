var singleNumber = function(nums) {
  let sortedNums = nums.sort();
  for (let i = 0; i < sortedNums.length; i + 2) {
    if (sortedNums[i] !== sortedNums[i + 1]) {
      return sortedNums[i];
    } else {
      i += 2;
    }
  }
};

let numsArr = [2, 1, 2];
console.log(singleNumber(numsArr));
