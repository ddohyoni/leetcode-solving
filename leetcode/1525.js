/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  var len = s.length;

  var numForward = 0;
  var numBackward = 0;

  var mapForward = {};
  var mapBackward = {};

  var dForward = [];
  var dBackward = [];

  var ans = 0;

  for (var i = 0; i < len - 1; i++) {
    // O(N)
    if (!mapForward[s[i]]) {
      mapForward[s[i]] = true;
      numForward++;
    }
    dForward.push(numForward);

    if (!mapBackward[s[len - i - 1]]) {
      mapBackward[s[len - i - 1]] = true;
      numBackward++;
    }
    dBackward.push(numBackward);
  }
  dBackward = dBackward.reverse();

  for (var i = 0; i < len - 1; i++) {
    // O(N)
    if (dForward[i] === dBackward[i]) ans++;
  }

  return ans;
};
