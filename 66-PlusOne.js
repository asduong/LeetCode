/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//   let numPlusOne = digits.pop();
//   numPlusOne += 1;
//   if (numPlusOne % 10 === 0) {
//     let splitString = numPlusOne.toString().split("");
//     for (let i = 0; i < splitString.length; i++) {
//       digits.push(Number(splitString[i]));
//     }
//   } else {
//     digits.push(numPlusOne);
//   }

//   return digits;
// };

var plusOne = function(digits) {
  let counter = 0;
  let numArr = [];
  for (let i = 0; i < digits.length; i++) {
    if ((digits[i] + 1) % 10 === 0) {
      counter++;
      continue;
    } else if (i !== digits.length - 1) {
      numArr.push(digits[i]);
    }
  }
  if (counter > 0) {
    numArr.push(1);
    for (let i = 0; i < counter; i++) {
      numArr.push(0);
    }
  } else {
    let numPlusOne = digits.pop();
    numPlusOne += 1;
    numArr.push(numPlusOne);
  }
  return numArr;
};

let arr = [1, 2, 3];
console.log(plusOne(arr));
