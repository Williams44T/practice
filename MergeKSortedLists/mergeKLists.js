class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeKLists(lists) {
  let nums = {};
  let min = Infinity;
  let max = -Infinity;
  lists.forEach(list => {
    while(list) {
      min = Math.min(min, list.val);
      max = Math.max(max, list.val);
      nums[list.val] = (nums[list.val] || 0) + 1;
      list = list.next;
    }
  });
  let head = new Node();
  let tail = head;
  for (let i = min; i <= max; i++) {
    while (nums[i] > 0) {
      tail.next = new Node(i);
      tail = tail.next;
      nums[i]--;
    }
  }
  return head.next;
}
