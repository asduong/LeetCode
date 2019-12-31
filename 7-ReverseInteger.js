var reverse = function(x) {
  let reversedNum = [];
  let digits = ("" + x).split("");
  if (x < 0) {
    digits.shift();
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    reversedNum.push(digits[i]);
  }
  reversedNum = Number(reversedNum.join(""));
  if (x < 0) {
    reversedNum *= -1;
  }
  if (reversedNum > Math.pow(2, 31) || reversedNum < Math.pow(-2, 31)) {
    return 0;
  }
  return reversedNum;
};

let num = 123;
console.log(reverse(num));
