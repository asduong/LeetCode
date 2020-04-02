/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 02 = 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum = 0;
  let i = 0;

  while (i < 10) {
    let stringArr = n.toString().split("");
    let numsArr = stringArr.map(Number);
    for (let i = 0; i < numsArr.length; i++) {
      sum += Math.pow(numsArr[i], 2);
    }
    i++;
    if (sum === 1) {
      return true;
    } else {
      n = sum;
      sum = 0;
    }
  }
  return false;
};

let inputNum = 2;
console.log(isHappy(inputNum));
