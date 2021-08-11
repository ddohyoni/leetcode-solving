function solution(s) {
  var answer = s.length;

  function getCompLength(str, k) {
    var res = 0;
    var index = 0;
    var sub = "";
    var num = 1;
    while (index + k < str.length) {
      if (sub === str.slice(i, i + k)) {
        num++;
      } else {
        if (num !== 1) res += k + num.toString().length;
        else res += k;

        sub = str.slice(i, i + k);
        num = 1;
      }
      index += k;
    }
    if (num !== 1) res += k + num.toString().length;
    else res += k;

    res += str.length % k;

    return res;
  }

  for (var i = 2; i <= s.length; i++) {
    answer = Math.min(getCompLength(s, i), answer);
  }

  return answer;
}
