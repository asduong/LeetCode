/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let negativeNumsCounter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        negativeNumsCounter++;
      }
    }
  }
  return negativeNumsCounter;
};

let grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3]
];

console.log(countNegatives(grid));
