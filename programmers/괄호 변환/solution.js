function solution(p) {
  var answer = "";

  function isGoodStr(str) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        stack.push("(");
      } else if (str[i] === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  }
  function go(input) {
    if (input === "") return "";
    if (isGoodStr(input)) return input;
    var balance = 0;
    var u = "";
    var v = "";
    for (var i = 0; i < input.length; i++) {
      if (input[i] === "(") balance++;
      else if (input[i] === ")") balance--;
      if (balance === 0) {
        u = input.slice(0, i + 1);
        v = input.slice(i + 1);
        break;
      }
    }
    if (isGoodStr(u)) return u + go(v);
    var res = "(" + go(v) + ")";
    for (var i = 1; i < u.length - 1; i++) {
      if (u[i] === "(") res += ")";
      else res += "(";
    }
    return res;
  }

  answer = go(p);

  return answer;
}
