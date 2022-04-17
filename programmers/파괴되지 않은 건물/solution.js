function solution(board, skill) {
  var answer = 0;
  var n = board.length;
  var m = board[0].length;

  var checkBoard = Array.from(Array(n), () => Array(m).fill(0));
  skill.forEach((ele) => {
    var [type, r1, c1, r2, c2, degree] = ele;
    var value = type === 1 ? degree * -1 : degree;

    checkBoard[r1][c1] += value;
    if (r2 + 1 < n && c2 + 1 < m) checkBoard[r2 + 1][c2 + 1] += value;
    if (c2 + 1 < m) checkBoard[r1][c2 + 1] -= value;
    if (r2 + 1 < n) checkBoard[r2 + 1][c1] -= value;
  });

  // 가로 휩쓸기
  var value = 0;
  for (var i = 0; i < n; i++) {
    value = 0;
    for (var j = 0; j < m; j++) {
      checkBoard[i][j] += value;
      value = checkBoard[i][j];
    }
  }

  // 새로 휩쓸기
  for (var i = 0; i < m; i++) {
    value = 0;
    for (var j = 0; j < n; j++) {
      checkBoard[j][i] += value;
      value = checkBoard[j][i];
    }
  }

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (checkBoard[i][j] + board[i][j] > 0) answer++;
    }
  }

  return answer;
}
