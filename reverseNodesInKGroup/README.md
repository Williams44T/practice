# [**Reverse Nodes in k-Group**](https://leetcode.com/problems/reverse-nodes-in-k-group/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  
- [Example 4](#example-4)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 - Success!](#attempt-1)

---
---
## **Prompt**
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

*k* is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should remain as it is.

**Follow up:**

- Could you solve the problem in O(1) extra memory space?
- You may not alter the values in the list's nodes, only nodes itself may be changed.

---
---
## **Examples**

### *Example 1*
![](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg)

- **Input:** `head = [1,2,3,4,5], k = 2`
- **Output:** `[2,1,4,3,5]`

---
### *Example 2*
![](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg)

- **Input:** `head = [1,2,3,4,5], k = 3`
- **Output:** `[3,2,1,4,5]`

---
### *Example 3*

- **Input:** `head = [1,2,3,4,5], k = 1`
- **Output:** `[1,2,3,4,5]`

---
### *Example 4*

- **Input:** `head = [1], k = 1`
- **Output:** `[1]`

---
---
## **Constraints**
- The number of nodes in the list is in the range `sz`.
- `1 <= sz <= 5000`
- `0 <= Node.val <= 1000`
- `1 <= k <= sz`

---   
---
## **Attempts**

### *Attempt 1*
MAR 16 2021

Attempted Solution:
```
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseKGroup(head, k) {
    if (k === 1) { return head; }
    let tempHead = new Node();
    tempHead.next = head;
    let current = tempHead;
    let tail, count, next;
    while (current.next) {
        head = current.next;
        tail = current.next;
        count = 1;
        while(count < k) {
            if (!tail.next) {
                tail = head;
                count = k - count + 1;
                continue;
            }
            next = tail.next.next;
            tail.next.next = head;
            head = tail.next;
            tail.next = next;
            count++;
        }
        current.next = head;
        current = tail;
    }
    return tempHead.next;
}
```

Success!

- **Runtime**: **84 ms**, faster than **99.14%** of JavaScript online submissions for Reverse Nodes in k-Group.
- **Memory Usage**: **41.7 MB**, less than **78.67%** of JavaScript online submissions for Reverse Nodes in k-Group.

