# [**Same Tree**](https://leetcode.com/problems/same-tree/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)

---
---
## **Prompt**
Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

---
---
## **Examples**

### *Example 1*
![](https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg)

- **Input:** `p = [1,2,3], q = [1,2,3]`  
- **Output:** `true`  

---
### *Example 2*
![](https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg)

- **Input:** `p = [1,2], q = [1,null,2]`  
- **Output:** `false`

---
### *Example 3*
![](https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg)

- **Input:** `p = [1,2,1], q = [1,1,2]`  
- **Output:** `false`

---
---
## **Constraints**
- The number of nodes in both trees is in the range `[0, 100]`.
- `-104 <= Node.val <= 104`

---
---
## **Attempts**

### *Attempt 1*
FEB 19 2021

Attempted Solution:
```
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
```

Success!

- **Runtime**: **72 ms**, faster than **93.43%** of JavaScript online submissions for Same Tree.
- **Memory Usage**: **39 MB**, less than **27.18%** of JavaScript online submissions for Same Tree.
