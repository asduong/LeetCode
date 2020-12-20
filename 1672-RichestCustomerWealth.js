/**
 * @param {number[][]} accounts
 * @return {number}
 */

const maximumWealth = (accounts) => {
  const wealths = accounts.map((el) => {
    return el.reduce((total, num) => {
      return total + num;
    });
  });
  return Math.max(...wealths);
};

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(accounts));
