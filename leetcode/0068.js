/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  var ans = [];

  function makeLine(eles) {
    var len = eles.length;
    var wordLen = eles.reduce((acc, cur) => acc + cur).length;
    var res = Math.floor((maxWidth - wordLen) / (len - 1));
    var rest = (maxWidth - wordLen) % (len - 1);
    var line = eles.length === 1 ? eles[0].padEnd(maxWidth, " ") : eles[0];
    for (var i = 1; i < len; i++) {
      if (rest > 0) {
        line += eles[i].padStart(res + 1 + eles[i].length, " ");
        rest--;
      } else line += eles[i].padStart(res + eles[i].length, " ");
    }
    ans.push(line);
  }

  var curLen = 0;
  var tmpWords = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (curLen === 0) {
      tmpWords.push(word);
      curLen += word.length;
    } else if (curLen + 1 + word.length <= maxWidth) {
      tmpWords.push(word);
      curLen += word.length + 1;
    } else {
      makeLine(tmpWords);
      tmpWords = [word];
      curLen = word.length;
    }
  }

  var lastLine = tmpWords.join(" ").padEnd(maxWidth, " ");
  ans.push(lastLine);

  return ans;
};
