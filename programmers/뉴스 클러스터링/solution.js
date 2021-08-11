function solution(str1, str2) {
  var answer = 0;
  var K = 65536;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  var map = {};
  var numUnion = 0;
  var numIntersection = 0;

  for (var i = 0; i < str1.length - 1; i++) {
    if (
      str1[i] < "a" ||
      str1[i] > "z" ||
      str1[i + 1] < "a" ||
      str1[i + 1] > "z"
    )
      continue;

    var ele = str1[i] + str1[i + 1];
    if (!map[ele]) {
      map[ele] = 1;
    } else map[ele]++;
    numUnion++;
  }

  for (var i = 0; i < str2.length - 1; i++) {
    if (
      str2[i] < "a" ||
      str2[i] > "z" ||
      str2[i + 1] < "a" ||
      str2[i + 1] > "z"
    )
      continue;

    var ele = str2[i] + str2[i + 1];
    if (map[ele] === undefined) {
      numUnion++;
      map[ele] = -1;
    } else if (map[ele] === 1) {
      numIntersection++;
      map[ele] = -1;
    } else if (map[ele] > 0) {
      numIntersection++;
      map[ele] = map[ele] - 1;
    } else if (map[ele] < 0) {
      numUnion++;
      map[ele]--;
    }
  }

  console.log({ numIntersection, numUnion });

  answer = numUnion === 0 ? K : Math.floor((numIntersection / numUnion) * K);

  return answer;
}
