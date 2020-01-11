/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let arr = n.toString().split("");
  let product = parseInt(arr[0]);
  let sum = parseInt(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    product *= parseInt(arr[i]);
    sum += parseInt(arr[i]);
  }
  return product - sum;
};

let num = 4431;
console.log(subtractProductAndSum(num));
