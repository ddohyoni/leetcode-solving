function solution(id_list, report, k) {
  var answer = [];

  // 1. 신고된 유저 구하기
  var set = new Set(report);
  var uniqReport = [...set];

  var blackUser = {};
  uniqReport.forEach((report) => {
    var [reporting, reported] = report.split(' ');
    if (blackUser[reported]) blackUser[reported].push(reporting);
    else blackUser[reported] = [reporting];
  });

  // 2. 정지된 유저 처리받기
  var sendMail = {};
  for (var key in blackUser) {
    if (blackUser[key].length >= k) {
      blackUser[key].forEach((user) => {
        if (sendMail[user]) sendMail[user]++;
        else sendMail[user] = 1;
      });
    }
  }

  answer = id_list.map((ele) => {
    return sendMail[ele] || 0;
  });

  return answer;
}
