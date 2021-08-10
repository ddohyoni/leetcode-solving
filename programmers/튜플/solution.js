function solution(s) {
  var answer = [];
  var input = [];

  function parseEle(ele) {
    input.push(ele.split(",").map((ele) => ele * 1));
  }

  var currentEle = "";
  for (var i = 1; i < s.length - 1; i++) {
    if (s[i] === "}") {
      parseEle(currentEle);
      currentEle = "";
      i++;
    } else if (s[i] !== "{") {
      currentEle += s[i];
    }
  }
  var map = {};
  input.sort((a, b) => a.length - b.length);
  input.forEach((ele) => {
    ele.forEach((e) => {
      if (!map[e]) answer.push(e);
      map[e] = true;
    });
  });

  return answer;
}
