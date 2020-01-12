/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let evenThenOdd = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evenThenOdd.unshift(A[i]);
    } else {
      evenThenOdd.push(A[i]);
    }
  }
  return evenThenOdd;
};

let numArr = [3, 1, 2, 4];
console.log(sortArrayByParity(numArr));
