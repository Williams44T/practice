var swapPairs = function(head) {
  var result = head;
  
  var current = head;
  while (current && current.next) {
    var temp = current.val;
    current.val = current.next.val;
    current.next.val = temp;
    current = current.next.next;
  }

  return result;
};
