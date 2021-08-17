/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var answer = false;
  var pows = [];
  for (var i = 0; i <= 9; i++) {
    pows[i] = i * i;
  }
  var map = {};

  function getNextNum(num) {
    var m = num;
    var res = 0;
    while (m >= 1) {
      res += pows[m % 10];
      m = Math.floor(m / 10);
    }
    return res;
  }

  var num = n;
  while (!map[num]) {
    map[num] = true;
    num = getNextNum(num);
    if (num === 1) {
      answer = true;
      break;
    }
  }

  return answer;
};
