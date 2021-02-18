# [**Swap Nodes in Pairs**](https://leetcode.com/problems/swap-nodes-in-pairs/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 (Success)](#attempt-1)

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

