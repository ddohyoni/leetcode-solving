{
  /**
   * @param {string[]} words
   * @return {number}
   */
  var longestStrChain = function (words) {
    function validChain(prev, next) {
      // O(16) -> O(1)

      if (prev.length !== next.length - 1) return false;

      var hasChance = true;
      for (var i = 0; i < next.length; i++) {
        var k = hasChance ? i : i - 1;
        if (prev[k] !== next[i]) {
          if (!hasChance) return false;
          else hasChance = false;
        }
      }

      return true;
    }

    words = words.sort((a, b) => a.length - b.length); // O(NlogN);
    var ans = 1;
    var dNum = [1];
    for (var i = 1; i < words.length; i++) {
      // O(N^2)
      var chainNum = 1;
      for (var j = 0; j < i; j++) {
        if (validChain(words[j], words[i])) {
          if (dNum[j] + 1 > chainNum) {
            chainNum = dNum[j] + 1;
          }
        }
      }
      dNum[i] = chainNum;
      ans = Math.max(ans, dNum[i]);
    }

    return ans;
  };
}
