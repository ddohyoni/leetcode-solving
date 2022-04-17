function solution(n, k) {
  var answer = -1;

  var converted = n.toString(k);
  var nums = converted
    .split('')
    .reduce((acc, cur) => (cur === '0' && acc[acc.length - 1] === '0' ? acc : acc + cur))
    .split('0')
    .map((ele) => ele * 1);

  function isPrime(num) {
    for (var i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  answer = nums.filter((num) => isPrime(num)).length;

  return answer;
}
