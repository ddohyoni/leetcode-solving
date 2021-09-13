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
var levelOrder = function (root) {
  var ans = [];
  function preOrder(node, lev) {
    if (node !== null) {
      if (!ans[lev]) {
        ans[lev] = [node.val];
      } else {
        ans[lev].push(node.val);
      }

      preOrder(node.left, lev + 1);
      preOrder(node.right, lev + 1);
    }
  }

  preOrder(root, 0);
  return ans;
};
