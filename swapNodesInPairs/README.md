# [**Swap Nodes in Pairs**](https://leetcode.com/problems/swap-nodes-in-pairs/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 (Success)](#attempt-1)
- [Attempt 2 (Success)](#attempt-2)

---
---
## **Prompt**
Given a linked list, swap every two adjacent nodes and return its head.

---
---
## **Examples**

### *Example 1*
![](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

- **Input:** `head = [1,2,3,4]`  
- **Output:** `[2,1,4,3]`  

---
### *Example 2*

- **Input:** `head = []`  
- **Output:** `[]`

---
### *Example 3*

- **Input:** `head = [1]`  
- **Output:** `[1]`

---
---
## **Constraints**
- The number of nodes in the list is in the range `[0, 100]`.
- `0 <= Node.val <= 100`

---
---
## **Attempts**

### *Attempt 1*
FEB 18 2021

Attempted Solution:
```
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
```

Success!

- **Runtime**: **84 ms**, faster than **28.46%** of JavaScript online submissions for Swap Nodes in Pairs.
- **Memory Usage**: **39 MB**, less than **14.92%** of JavaScript online submissions for Swap Nodes in Pairs.

---
### *Attempt 2*
FEB 18 2021

Attempted Solution
```
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
```

Success! This was actually the first solution I came up with, but I changed it before I submitted it becauase I figured swapping values instead of nodes would be faster. Then I saw that the fastest solution on Leetcode was this solution! Yet when I resubmitted it, the speed is slower. Some factors unknown to me are at play.

**Runtime**: **88 ms**, faster than **18.95%** of JavaScript online submissions for Swap Nodes in Pairs.
**Memory Usage**: **38.7 MB**, less than **68.45%** of JavaScript online submissions for Swap Nodes in Pairs.
