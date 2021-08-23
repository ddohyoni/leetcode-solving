/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var ans = [-1, -1];
  function binarySearch(arr, l, h) {
    var low = l;
    var high = h;
    var mid = 0;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      console.log({ low, high, mid });
      if (arr[mid] < target) {
        low = mid + 1;
      } else if (arr[mid] > target) {
        high = mid - 1;
      } else {
        if (arr[low] === target && arr[high] === target) {
          return [low, high];
        } else {
          var front = binarySearch(arr, low, mid);
          var back = binarySearch(arr, mid + 1, high);
          if (front === -1) {
            return back;
          } else if (back === -1) {
            return front;
          } else {
            return [front[0], back[1]];
          }
        }
      }
    }
    return -1;
  }

  ans = binarySearch(nums, 0, nums.length - 1);
  if (ans === -1) ans = [-1, -1];

  return ans;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
