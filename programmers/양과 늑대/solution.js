function solution(info, edges) {
  var answer = 0;
  var n = info.length;

  // 1. 간선 정리
  var map = {};
  edges.forEach((ele) => {
    const [parent, child] = ele;
    map[parent] = map[parent] ? [...map[parent], child] : [child];
  });

  // 2. DFS
  var checked = Array.from({ length: n }, () => 0);
  function dfs(node, checked) {
    checked[node] = true;
    for (var i = 0; i < map[node].length; i++) {
      var des = map[node][i];
      if (checked[des] === 0) dfs(des, checked);
    }
  }

  return answer;
}
