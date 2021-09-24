/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var preNum;
  var noDuplePrices = prices.filter((ele) => {
    var isDuple = false;
    if (preNum === ele) isDuple = true;
    preNum = ele;
    return !isDuple;
  });
  if (noDuplePrices.length === 1) return 0;

  var ans = 0;
  var points = [];
  for (var i = 0; i < noDuplePrices.length; i++) {
    var price = noDuplePrices[i];
    var point;
    if (i === 0) {
      point = price < noDuplePrices[1] ? -1 : 1;
    } else if (i === noDuplePrices.length - 1) {
      point = price < noDuplePrices[i - 1] ? -1 : 1;
    } else {
      if (price < noDuplePrices[i + 1] && price < noDuplePrices[i - 1])
        point = -1;
      else if (price > noDuplePrices[i + 1] && price > noDuplePrices[i - 1])
        point = 1;
      else point = 0;
    }
    points.push(point);
  }

  var price = null;
  noDuplePrices.forEach((ele, idx) => {
    if (points[idx] === -1) price = ele;
    if (price !== null && points[idx] === 1) {
      ans = ans + (ele - price);
      price = null;
    }
  });

  console.log(points);
};

maxProfit([7, 1, 5, 3, 6, 4]);
