var plusOne = function(digits) {
  let counter = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      counter++;
    } else {
      let lastNum = digits.pop();
      digits.push(lastNum);
    }
  }
  return digits;
};

let arr = [1, 3, 4, 5];

console.log(digits(arr));
