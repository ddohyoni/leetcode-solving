/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  var map = {};
  var strike = 0;
  var ball = 0;
  var len = secret.length;

  for (var i = 0; i < len; i++) {
    map[secret[i]] = map[secret[i]] === undefined ? 1 : map[secret[i]] + 1;
    if (secret[i] === guess[i]) strike += 1;
  }

  for (var i = 0; i < len; i++) {
    if (map[guess[i]] !== undefined && map[guess[i]] > 0) {
      ball += 1;
      map[guess[i]] -= 1;
    }
  }

  ball = ball - strike;

  return `${strike}A${ball}B`;
};
