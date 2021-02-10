# [**Merge Two Sorted Lists**](https://leetcode.com/problems/merge-two-sorted-lists/)

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
Merge two sorted linked lists and return it as a **sorted** list. The list should be made by splicing together the nodes of the first two lists.

---
---
## **Examples**

### *Example 1*
![](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

- **Input:** `l1 = [1,2,4], l2 = [1,3,4]`  
- **Output:** `[1,1,2,3,4,4]`  

---
### *Example 2*

- **Input:** `l1 = [], l2 = []`  
- **Output:** `[]`

---
### *Example 3*

- **Input:** `l1 = [], l2 = [0]`  
- **Output:** `[0]`

---
---
## **Constraints**
- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `l1` and `l2` are sorted in **non-decreasing** order.

---
---
## **Attempts**

### *Attempt 1*
FEB 09 2021  

Success!  

- **Runtime:** **100 ms**, faster than **25.29%** of JavaScript online submissions for Merge Two Sorted Lists.
- **Memory Usage:** **40.2 MB**, less than **73.55%** of JavaScript online submissions for Merge Two Sorted Lists.