var Logger = function () {
  this.map = {};
  return null;
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.map[message] === undefined || this.map[message] <= timestamp) {
    this.map[message] = timestamp + 10;
    return true;
  } else {
    return false;
  }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
