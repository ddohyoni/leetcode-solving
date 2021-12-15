/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function (root) {
  var ans = [];

  function postOrder(node) {
    if (node !== null) {
      postOrder(node.left);
      postOrder(node.right);

      var level;
      if (node.left === null && node.right === null) level = 0;
      else if (node.left === null) level = node.right.val + 1;
      else if (node.right === null) level = node.left.val + 1;
      else level = Math.max(node.left.val, node.right.val) + 1;

      if (ans[level] === undefined) ans[level] = [node.val];
      else ans[level].push(node.val);
      node.val = level;
    }
  }
  postOrder(root);
  return ans;
};
