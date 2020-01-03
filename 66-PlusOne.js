var plusOne = function(digits) {
  let counter = 0;
  let numArr = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      counter++;
    } else {
      break;
    }
  }

  if (counter === 0) {
    let numCounter = digits.pop();
    numCounter += 1;
    digits.push(numCounter);
    return digits;
  } else {
    for (let i = 0; i < counter; i++) {
      digits.pop();
      numArr.push(0);
    }
    if (digits.length === 0) {
      digits.push(1);
    } else {
      let finalNumPlusOne = digits.pop();
      finalNumPlusOne += 1;
      digits.push(finalNumPlusOne);
    }
  }

  for (let i = 0; i < numArr.length; i++) {
    digits.push(numArr[i]);
  }

  return digits;
};

let arr = [9, 9, 9];

console.log(plusOne(arr));
