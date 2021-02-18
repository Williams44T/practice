var linkedListToArray = (head) => {
  var result = [];

  var current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};

module.exports = linkedListToArray;
