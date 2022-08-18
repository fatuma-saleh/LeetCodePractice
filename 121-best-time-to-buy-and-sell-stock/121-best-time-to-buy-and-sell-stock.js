/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0], profit = 0;

  for (const x of prices) {
    min = Math.min(min, x), profit = Math.max((x - min), profit);
  }

  return profit;
};