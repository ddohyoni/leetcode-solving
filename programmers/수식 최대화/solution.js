function solution(expression) {
  var answer = 0;
  var orders = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  // 1. 파싱
  var len = expression.length;
  var nums = [];
  var operators = [];
  var idx = 0;
  var currentNum = 0;
  while (idx < len) {
    var cur = expression[idx];
    if (cur === "+" || cur === "-" || cur === "*") {
      operators.push(cur);
      nums.push(currentNum);
      currentNum = 0;
    } else {
      currentNum = currentNum * 10 + cur * 1;
    }
    if (idx === len - 1) {
      nums.push(currentNum);
      currentNum = 0;
    }
    idx++;
  }

  // 2. 계산
  function calculate(target, n, o) {
    var idx = 0;
    while (idx < o.length) {
      var result = 0;
      if (o[idx] === target) {
        if (target === "+") result = n[idx] + n[idx + 1];
        else if (target === "-") result = n[idx] - n[idx + 1];
        else if (target === "*") result = n[idx] * n[idx + 1];
        o.splice(idx, 1);
        n.splice(idx, 2, result);
      } else idx++;
    }

    return [n, o];
  }

  for (var i = 0; i < orders.length; i++) {
    var res = calculate(orders[i][0], [...nums], [...operators]);
    res = calculate(orders[i][1], res[0], res[1]);
    res = calculate(orders[i][2], res[0], res[1]);

    answer = Math.max(Math.abs(res[0][0]), answer);
  }

  return answer;
}
