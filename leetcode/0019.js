/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var dummyHead = new ListNode(0);
  dummyHead.next = head;

  var len = 0;
  var curNode = dummyHead.next;
  while (curNode !== null) {
    curNode = curNode.next;
    len++;
  }

  var targetIdx = len - n;
  if (len === n) {
    dummyHead.next = dummyHead.next.next;
    return dummyHead.next;
  }

  var curNode = dummyHead.next;
  var idx = 0;
  while (curNode !== null) {
    if (targetIdx - 1 === idx) {
      console.log(targetIdx, idx);
      curNode.next = curNode.next.next;
      break;
    }
    curNode = curNode.next;

    idx++;
  }

  return dummyHead.next;
};
