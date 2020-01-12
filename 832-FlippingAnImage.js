/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  let arr = [];
  for (let i = 0; i < A.length; i++) {
    arr.push([]);
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = A[i].length - 1; j >= 0; j--) {
      if (A[i][j] === 0) {
        arr[i].push(1);
      } else {
        arr[i].push(0);
      }
    }
  }
  return arr;
};

let matrix = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0]
];

console.log(flipAndInvertImage(matrix));
