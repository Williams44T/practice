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
var isSymmetric = function(root) {
  if (root === null) { return true; }

  var leftQ = [root.left];
  var rightQ = [root.right];

  while (leftQ.length > 0) {
    var nodeL = leftQ.shift();
    var nodeR = rightQ.shift();

    if (nodeL === null || nodeR === null) {
      if (nodeL === nodeR) {
        continue;
      } else {
        return false;
      }
    }

    if (nodeL.val !== nodeR.val) { return false; }

    leftQ.push(nodeL.left);
    leftQ.push(nodeL.right);
    rightQ.push(nodeR.right);
    rightQ.push(nodeR.left);
  }

  return true;
};

module.exports = isSymmetric;