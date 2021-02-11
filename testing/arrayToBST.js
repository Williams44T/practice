var TreeNode = (val, left, right) => {
  return {
    val: val === undefined ? 0 : val,
    left: left === undefined ? null : left,
    right: right === undefined ? null : right,
  };
};

var arrayToBST = (arr = []) => {
  if (arr.length === 0) { return null; }
  
  var makeBST = (idx) => {
    if (arr[idx] === null) { return null; }

    var root = TreeNode(arr[idx]);
    var left = idx * 2 + 1;
    if (left < arr.length) { root.left = makeBST(left); }
    var right = idx * 2 + 2;
    if (right < arr.length) { root.right = makeBST(right); }
    return root;
  };

  return makeBST(0);
};

module.exports = arrayToBST;