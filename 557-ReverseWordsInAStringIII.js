/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // let stringOutput = "";
  // let splitArr = s.split(" ");
  // if (s.length === 0) {
  //   return "";
  // }
  // for (let i = 0; i < splitArr.length; i++) {
  //   for (let j = splitArr[i].length - 1; 0 <= j; j--) {
  //     stringOutput += splitArr[i][j];
  //     if (j === 0 && i === splitArr.length - 1) {
  //       return stringOutput;
  //     } else if (j === 0) {
  //       stringOutput += " ";
  //     }
  //   }
  // }
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

let string = "Let's take LeetCode contest";
console.log(reverseWords(string));
