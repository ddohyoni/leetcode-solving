function solution(stones, k) {
  var answer = 0;
  var max = 200000000;
  function isOk(m) {
    var num = 0;
    for (var i = 0; i < stones.length; i++) {
      if (num === k) break;

      if (stones[i] - m <= 0) num++;
      else num = 0;
    }

    return num < k;
  }

  var start = 1;
  var end = max;
  console.log(start, end);
  while (start < end) {
    var mid = Math.floor((start + end) / 2);
    if (isOk(mid)) start = mid + 1;
    else end = mid;

    console.log(start, end);
  }

  answer = start;

  return answer;
}
