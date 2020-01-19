/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  let arr = (num += "").split("");
  for (let num in arr) {
    if (arr[num] === "6") {
      arr[num] = "9";
      return parseInt(arr.join(""));
    }
  }
  return parseInt(arr.join(""));
};

console.log(maximum69Number(69));
