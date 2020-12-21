/**
 * @param {string} command
 * @return {string}
 */
const interpret = (command) => {
  let text = '';
  let splitStr = command.split('');
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === '(' && splitStr[i + 1] === 'a') {
      text += 'al';
      i += 3;
    } else if (splitStr[i] === '(') {
      text += 'o';
      i += 1;
    } else {
      text += 'G';
    }
  }
  return text;
};

let command = '(al)G(al)()()G';
console.log(interpret(command));
