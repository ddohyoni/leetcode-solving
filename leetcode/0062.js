/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  var dp = Array.from(Array(m), () => Array(n).fill(0));
  var ans = 0;

  dp[0][0] = 1;
  for (var row = 0; row < m; row++) {
    for (var col = 0; col < n; col++) {
      if (row - 1 >= 0) {
        dp[row][col] += dp[row - 1][col];
      }
      if (col - 1 >= 0) {
        dp[row][col] += dp[row][col - 1];
      }
    }
  }

  ans = dp[m - 1][n - 1];

  return ans;
};
