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
 * @return {boolean}
 */

var isValidBST = (root, max = 2 ** 31, min = -(2 ** 31 + 1)) => {
  if (
    root.val >= max || 
    root.val <= min ||
    (root.left && !isValidBST(root.left, root.val, min)) ||
    (root.right && !isValidBST(root.right, max, root.val))
  ) { return false; }

  return true;
};

module.exports = isValidBST;