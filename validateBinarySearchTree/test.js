var isValidBST = require('./validateBinarySearchTree');

var TreeNode= (val, left, right) => {
  return {
    val: val === undefined ? 0 : val,
    left: left === undefined ? null : left,
    right: right === undefined ? null : right,
  };
}

var assertEqual = (actual, expected, testname) => {
  var result = actual === expected ? 'PASS' : 'FAIL';
  console.log(testname, result);
};

var root = TreeNode(2);
root.left = TreeNode(1);
root.right = TreeNode(3);

var actual = isValidBST(root);
var expected = true;
assertEqual(actual, expected, 'TEST 1');

var root = TreeNode(5);
root.left = TreeNode(1);
root.right = TreeNode(4);
root.right.left = TreeNode(3);
root.right.right = TreeNode(6);

var actual = isValidBST(root);
var expected = false;
assertEqual(actual, expected, 'TEST 2');

var root = TreeNode(5);
root.left = TreeNode(1);
root.right = TreeNode(6);
root.right.left = TreeNode(5);

var actual = isValidBST(root);
var expected = false;
assertEqual(actual, expected, 'TEST 3');

var root = TreeNode(2147483647);

var actual = isValidBST(root);
var expected = true;
assertEqual(actual, expected, 'TEST 4');
