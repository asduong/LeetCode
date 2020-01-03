/**
 * @param {string} s
 * @return {boolean}
 **/

var isPalindrome = function(s) {
  let lowerCased = s
    .toLowerCase()
    .split(" ")
    .join("");

  console.log(lowerCased);
  let reversedCount = lowerCased.length - 1;
  for (let i = 0; i < lowerCased.length; i++) {
    if (
      lowerCased[i] !== /[a-z0-9]+$/i ||
      lowerCased[reversedCount] !== /[a-z0-9]+$/i
    ) {
      continue;
    }
    if (lowerCased[reversedCount] === lowerCased[i]) {
      reversedCount--;
    } else {
      return false;
    }
  }
  return true;
};

let palindrome = "A man, a plan, a canal: Panama";
console.log(isPalindrome(palindrome));
