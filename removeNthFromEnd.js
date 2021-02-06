/*
LEETCODE: Remove the Nth Node From End of List
https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/* My first thought is to count how many nodes
 * are in the list. If I subtract n from this
 * total, this will give me the node whose 'next'
 * value needs to skip the next node.
 * I would find this node and assign it's
 * 'next' value to 'this.next.next'. This works,
 * but it would require two passes, and the prompt
 * is suggesting I can do it in one.
 */

 /* My one-pass solution is to store the nodes
  * in an object with the nodes' positions as the
  * keys as I'm counting the total nodes in the
  * list. This way, when I compute the node that
  * needs to skip it's next node, I don't have to
  * pass through the list again to find it.
  */

let removeNthFromEnd = function(head, n) {
  let nodes = {};
  let current = head;
  let total = 0;

  while (current) {
    nodes[++total] = current;
    current = current.next;
  }

  if (total === 1) { return null; }
  if (total - n === 0) { return nodes[2]; }

  let target = nodes[total - n];
  target.next = target.next.next;

  return head;
};

/*
First Attempt (02.04.2021):
Runtime: 88 ms, faster than 53.44% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 40.2 MB, less than 62.60% of JavaScript online submissions for Remove Nth Node From End of List.
*/