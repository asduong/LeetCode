/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let text = "";
  let unicode = 0;
  for (let i = 0; i < str.length; i++) {
    unicode = str[i].charCodeAt();
    if (unicode >= 65 && unicode <= 90) {
      text += String.fromCharCode(unicode + 32);
    } else {
      text += str[i];
    }
  }
  return text;
};

let text = "LOVELY";
console.log(toLowerCase(text));
