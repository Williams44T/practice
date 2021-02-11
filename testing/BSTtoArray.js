var BSTtoArray = (root) => {
  var arr = [];
  var queue = [root];

  while (queue.length > 0) {
    var node = queue.shift();

    if (node === null) {
      arr.push(null);
    } else {
      arr.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return arr;
};

module.exports = BSTtoArray;