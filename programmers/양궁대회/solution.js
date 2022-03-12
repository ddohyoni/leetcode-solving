function solution(n, info) {
  var answer = [-1];
  var maxDiff = 0;

  var todo = info.map((ele) => ele + 1);

  function clcDiff(arr) {
    const ryanPoint = arr.map((ele, idx) => (ele >= todo[idx] ? 10 - idx : 0)).reduce((acc, cur) => acc + cur);
    const apeachPoint = arr.map((ele, idx) => (ele <= info[idx] && info[idx] !== 0 ? 10 - idx : 0)).reduce((acc, cur) => acc + cur);

    return ryanPoint - apeachPoint;
  }

  function getLower(arr1, arr2) {
    for (var i = 10; i >= 0; i--) {
      if (arr1[i] > arr2[i]) return arr1;
      else if (arr1[i] < arr2[i]) return arr2;
    }

    return arr1;
  }

  function go(idx, rest, res) {
    if (rest < 0 || idx > 11) return;
    if (rest >= 0 && idx === 11) {
      res = res.length < 11 ? todo.map((ele, idx) => res[idx] || 0) : res;
      res[10] = rest;
      const diff = clcDiff(res);
      if (diff >= maxDiff && diff > 0) {
        if (diff === maxDiff) answer = getLower(answer, res);
        else answer = res;
        maxDiff = diff;
      }

      return;
    }

    go(idx + 1, rest - todo[idx], [...res, todo[idx]]);
    go(idx + 1, rest, [...res, 0]);
  }

  go(0, n, []);

  return answer;
}
