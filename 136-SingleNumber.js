var singleNumber = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return Number(key);
    }
  }
};

let numsArr = [2, 1, 2, 1, 3];
console.log(singleNumber(numsArr));
