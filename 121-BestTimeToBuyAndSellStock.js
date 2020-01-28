/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let check = prices[0];
  let count = 0;
  let sale = 0;

  for (let i = count; i < prices.length; i++) {
    if (check < prices[i] && prices[i] - check > sale) {
      sale = (check - prices[i]) * -1;
    }
    if (i === prices.length - 1) {
      i = count;
      count++;
      check = prices[i + 1];
    }
  }
  return sale;
};

let stocks = [7, 6, 4, 3, 1];
console.log(maxProfit(stocks));
