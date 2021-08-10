/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  var ans = 0;
  var n = matrix.length;
  var m = matrix[0].length;
  var map = []; // 갈 수 있는 방향 정리 [i][j][direction]
  var isEnd = []; // startPoint 잡기
  var checkOriginal = [...isEnd];

  // O(4N^) => O(N^)
  for (var i = 0; i < n; i++) {
    map.push([]);
    isEnd.push([]);
    checkOriginal.push([]);

    for (var j = 0; j < m; j++) {
      map[i].push([]);
      isEnd[i][j] = false;
      checkOriginal[i][j] = 0;
      for (var k = 0; k < 4; k++) map[i][j][k] = false;
    }
  }
  var direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // O(4N^) => O(N^)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      for (var k = 0; k < direction.length; k++) {
        var ii = direction[k][0] + i;
        var jj = direction[k][1] + j;
        if (
          ii >= 0 &&
          ii < n &&
          jj >= 0 &&
          jj < m &&
          matrix[i][j] < matrix[ii][jj]
        ) {
          map[i][j][k] = true;
          isEnd[ii][jj] = true;
        }
      }
    }
  }
  console.log(isEnd);
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (isEnd[i][j] === false) {
        // bfs check 다시하기 =>dfs로..
        var check = [...checkOriginal];
        var queue = [];
        queue.push([i, j]);
        check[i][j] = 1;
        var idx = 1;
        while (queue.length !== 0) {
          var x = queue[0];
          queue.shift();
          for (var k = 0; k < 4; k++) {
            var y = [x[0] + direction[k][0], x[1] + direction[k][1]];
            if (map[x[0]][x[1]][k] === true && check[y[0]][y[1]] === 0) {
              queue.push(y);
              check[y[0]][y[1]] = check[x[0]][x[1]] + 1;
              ans = Math.max(ans, check[y[0]][y[1]]);
            }
          }
        }
      }
    }
  }

  return ans;
};
