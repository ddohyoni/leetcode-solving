function solution(N, stages) {
  var answer = [];
  var len = stages.length;
  var map = {};
  var sum = {};

  stages.forEach((ele) => {
    if (!map[ele]) map[ele] = 1;
    else map[ele] += 1;
  });

  sum[N + 1] = map[N + 1] ? map[N + 1] : 0;
  for (var i = N; i >= 1; i--) {
    var numUser = !map[i] ? 0 : map[i];
    sum[i] = sum[i + 1] + numUser;
  }

  console.log(map, sum);

  for (var i = 1; i <= N; i++) {
    var numUser = !map[i] ? 0 : map[i];
    if (sum[i] === 0) answer.push([0, i]);
    else answer.push([numUser / sum[i], i]);
  }

  console.log(answer);

  answer = answer.sort((a, b) => b[0] - a[0]).map((ele) => ele[1]);

  return answer;
}
