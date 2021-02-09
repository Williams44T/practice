# [**Validate Binary Search Tree**](https://leetcode.com/problems/validate-binary-search-tree/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)  
- [Attempt 2](#attempt-2)  

---
---
## **Prompt**
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A **valid BST** is defined as follows:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

---
---
## **Examples**

### *Example 1*
![](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)

> **Input:** `root = [2, 1, 3]`  
> **Output:** `true`  

---
### *Example 2*
![](https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg)

> **Input:** `root = [5, 1, 4, null, null, 3, 6]`  
> **Output:** `false`  
> **Explanation:** The root node's value is 5 but its right child's value is 4.

---
---
## **Constraints**
- The number of nodes in the tree is in the range `[1, 104]`.
- `-2^31 <= Node.val <= 2^31 - 1`

---
---
## **Attempts**

### *Attempt 1*
Attempted Solution:
```
var isValidBST = (root, max = 2 ** 31 - 1, min = -(2 ** 31)) => {
  if (
    root.val >= max || 
    root.val <= min ||
    (root.left && !isValidBST(root.left, root.val, min)) ||
    (root.right && !isValidBST(root.right, max, root.val))
  ) { return false; }

  return true;
};
```
Failed Test:
> **Input:** `[2147483647]`  
> **Expected:** `true`  
> **Actual:** `false`  
> **Explanation:**  The default range set by my max and min parameters needed to be set *at least* one integer wider in each direction.

---
### *Attempt 2*
Success!  

> **Runtime:** **92 ms**, faster than **59.90%** of JavaScript online submissions for Validate Binary Search Tree.  
> **Memory Usage:** **43.2 MB**, less than **18.81%** of JavaScript online submissions for Validate Binary Search Tree.