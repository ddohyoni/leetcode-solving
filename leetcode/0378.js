/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  var n = matrix.length;
  var arr = [];
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      arr.push(matrix[i][j]);
    }
  }
  arr.sort((a, b) => a - b);

  return arr[k - 1];
};
