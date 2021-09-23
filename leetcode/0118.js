/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var ans = [];
  for (var i = 0; i < numRows; i++) {
    ans.push([]);
    for (var j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        ans[i].push(1);
      } else {
        ans[i].push(ans[i - 1][j - 1] + ans[i - 1][j]);
      }
    }
  }

  return ans;
};
