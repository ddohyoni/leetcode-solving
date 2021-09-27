/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  var row = {};
  var col = {};
  var grid = {};
  for (var i = 0; i < 9; i++) {
    row = {};
    col = {};
    grid = {};
    for (var j = 0; j < 9; j++) {
      if (row[board[i][j]]) return false;
      else if (board[i][j] !== ".") row[board[i][j]] = true;

      if (col[board[j][i]]) return false;
      else if (board[j][i] !== ".") col[board[j][i]] = true;

      var ii = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      var jj = (i % 3) * 3 + (j % 3);
      if (grid[board[ii][jj]]) return false;
      else if (board[ii][jj] !== ".") grid[board[ii][jj]] = true;
    }
  }

  return true;
};
