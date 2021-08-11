function solution(lines) {
  var answer = 1;
  var len = lines.length;

  function parseTimetoNum(time) {
    var timeNum = 0;
    var [hour, min, sec] = time.split(":");
    timeNum = hour * 3600000 + min * 60000 + sec * 1000;

    return timeNum;
  }
  var responseInfo = lines.map((ele) => {
    var [, time, t] = ele.split(" ");
    var endTime = parseTimetoNum(time);
    var startTime = endTime - t.split("s")[0] * 1000 + 1;

    return [startTime, endTime];
  });

  function getMaxProcess(startTime, endTime) {
    var num = 0;
    for (var i = 0; i < len; i++) {
      if (responseInfo[i][0] > endTime || responseInfo[i][1] < startTime)
        continue;

      num++;
    }

    return num;
  }

  for (var i = 0; i < len; i++) {
    var startTime = responseInfo[i][1];
    var endTime = startTime + 1000 - 1;
    answer = Math.max(getMaxProcess(startTime, endTime), answer);
  }

  return answer;
}
