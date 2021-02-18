var LinkedNode = (val, next) => {
  return {
    val,
    next: next || null,
  }
};

var arrayToLinkedList = (arr) => {
  if (!arr.length) { return null; }

  var head = LinkedNode(arr[0]);
  var current = head;
  for (var i = 1; i < arr.length; i++) {
    current.next = LinkedNode(arr[i]);
    current = current.next;
  }

  return head;
};

module.exports = arrayToLinkedList;