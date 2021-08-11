function solution(orders, course) {
  var answer = [];
  orders = orders.map((order) => {
    return order.split("").sort().join("");
  });

  function getOrderbyNum(order, num) {
    var result = [];
    if (order.length < num) return [];
    if (order.length === num) return [order];

    function go(idx, res) {
      if (res.length === num) {
        result.push(res);
        return;
      }

      if (idx >= order.length) return;
      go(idx + 1, res + order[idx]);
      go(idx + 1, res);
    }
    go(0, "");

    return result;
  }

  for (var i = 0; i < course.length; i++) {
    var map = {};
    var maxNum = 0;
    for (var j = 0; j < orders.length; j++) {
      getOrderbyNum(orders[j], course[i]).forEach((ele) => {
        map[ele] = !map[ele] ? 1 : map[ele] + 1;
        maxNum = Math.max(map[ele], maxNum);
      });
    }

    for (var key in map) {
      if (map[key] === maxNum && map[key] > 1) {
        answer.push(key);
      }
    }
  }
  answer.sort();

  return answer;
}
