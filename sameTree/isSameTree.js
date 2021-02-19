var isSameTree = function(p, q) {
    var pList = [p];
    var qList = [q];

    while (!!pList.length && !!qList.length) {
      p = pList.shift();
      q = qList.shift();

      if (!p && !q) {
        continue;
      } else if (!p || !q || p.val !== q.val) {
        return false;
      }

      pList.push(p.left);
      pList.push(p.right);
      qList.push(q.left);
      qList.push(q.right);
    }

    return true;
};

module.exports = isSameTree;