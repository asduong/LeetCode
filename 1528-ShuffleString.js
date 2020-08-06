/*
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.
*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let splitString = s.split("");
  for (let i = 0; i < indices.length; i++) {
    splitString.splice(indices[i], 1, s[i]);
  }
  return splitString.join("");
};

let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(restoreString(s, indices));
