var ListNode = (val, next) => {
  return {
      val,
      next: next || null,
  }
}

var swapPairs = function(head) {
  var tempHead = ListNode(0, head);

  var current = tempHead
  while (current.next && current.next.next) {
    var right = current.next;
    var left = current.next.next;
    right.next = left.next;
    current.next = left;
    left.next = right;
    current = right;
  }

  return tempHead.next;
};

module.exports = swapPairs;
