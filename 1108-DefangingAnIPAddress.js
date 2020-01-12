/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let ipArr = address.split(".");
  return ipArr.join("[.]");
};

let address = "255.100.50.0";
console.log(defangIPaddr(address));
