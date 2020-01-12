/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let squaredNumbers = [];
  for (let i = 0; i < A.length; i++) {
    squaredNumbers.push(Math.pow(A[i], 2));
  }
  return squaredNumbers.sort((a, b) => {
    return a - b;
  });
};

let numArr = [-7, -3, 2, 3, 11];
console.log(sortedSquares(numArr));
