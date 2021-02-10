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
 * @return {TreeNode}
 */
var bstToGst = function(root) {

    var getSum = (root, rightSum) => {
      var sum = root.val + rightSum;
      sum += root.right ? getSum(root.right, rightSum) - rightSum : 0;
      root.val = sum;
      sum += root.left ? getSum(root.left, sum) - sum : 0;
      return sum;
    }

    getSum(root, 0);
    return root;
};