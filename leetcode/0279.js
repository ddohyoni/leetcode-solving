/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  var d = {};
  for (var i = 1; i * i <= n; i++) {
    if (i * i === n) return 1;
    d[i * i] = 1;
  }

  for (var i = 2; i <= n; i++) {
    if (d[i] === 1) continue;
    for (var j = 1; j * j < i; j++) {
      d[i] =
        d[i] === undefined
          ? 1 + d[i - j * j]
          : Math.min(1 + d[i - j * j], d[i]);
    }
  }

  return d[n];
};
