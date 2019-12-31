var isPalindrome = function(x) {
  let num = "" + x;
  let reversedCount = num.length - 1;
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== num[reversedCount]) {
      return false;
    } else {
      reversedCount -= 1;
    }
  }
  return true;
};

let number = 321;
console.log(isPalindrome(number));
