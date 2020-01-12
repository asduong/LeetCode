/**
 * @param {string} s
 * @return {string}
 */
// 97-122
var freqAlphabets = function(s) {
  let wordArr = [];
  let num = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "#") {
      num = s[i - 2] + s[i - 1];
      i -= 2;
      wordArr.unshift(String.fromCharCode(parseInt(num) + 96));
    } else {
      wordArr.unshift(String.fromCharCode(parseInt(s[i]) + 96));
    }
  }
  return wordArr.join("");
};

let s = "10#11#12";
console.log(freqAlphabets(s));
