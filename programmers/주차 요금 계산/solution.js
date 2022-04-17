function solution(fees, records) {
  var answer = [];

  // 1. 시간 계산
  var minParking = {};
  var inTime = {};

  records.forEach((record) => {
    var [time, car, state] = record.split(' ');
    if (state === 'IN') inTime[car] = time;
    else {
      var min = calculateMin(inTime[car], time);
      if (minParking[car]) minParking[car] += min;
      else minParking[car] = min;

      delete inTime[car];
    }
  });

  for (var key in inTime) {
    var min = calculateMin(inTime[key], '23:59');
    if (minParking[key]) minParking[key] += min;
    else minParking[key] = min;
  }

  function calculateMin(inTime, outTime) {
    var [inHour, inMin] = inTime.split(':').map((ele) => ele * 1);
    var [outHour, outMin] = outTime.split(':').map((ele) => ele * 1);

    var min = outHour * 60 + outMin - (inHour * 60 + inMin);

    return min;
  }

  // 2. 주차 요금 계산
  var feeperCar = {};
  var [baseTime, baseFee, perTime, perFee] = fees;

  for (var key in minParking) {
    answer.push(key);
    var fee = minParking[key] <= baseTime ? baseFee : baseFee + Math.ceil((minParking[key] - baseTime) / perTime) * perFee;
    feeperCar[key] = fee;
  }

  answer = answer.sort().map((ele) => feeperCar[ele]);

  return answer;
}
