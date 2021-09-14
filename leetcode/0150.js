/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  var stk = [];

  function isOperator(token) {
    return token === "+" || token === "-" || token === "*" || token === "/";
  }
  function calculate(x, y, operator) {
    var res;
    if (operator === "+") res = x + y;
    else if (operator === "-") res = x - y;
    else if (operator === "*") res = x * y;
    else if (operator === "/") {
      res = x / y;
      res = res < 0 ? Math.ceil(res) : Math.floor(res);
    }
    return res;
  }

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (isOperator(token)) {
      var y = stk.pop();
      var x = stk.pop();
      stk.push(calculate(x, y, token));
    } else {
      stk.push(token * 1);
    }
  }

  return stk[0];
};
