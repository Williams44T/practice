# [**Merge K Sorted Lists**](https://leetcode.com/problems/merge-k-sorted-lists/)

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
You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*

---
---
## **Examples**

### *Example 1*

- **Input:** `lists = [[1,4,5],[1,3,4],[2,6]]`
- **Output:** `[1,1,2,3,4,4,5,6]`
- **Explanation:** The linked-lists are:
```
[
  1->4->5,
  1->3->4,
  2->6
]
```
merging them into one sorted list:
```
1->1->2->3->4->4->5->6
```

---
### *Example 2*

- **Input:** `lists = []`
- **Output:** `[]`

---
### *Example 3*

- **Input:** `lists = [[]]`
- **Output:** `[]`

---
---
## **Constraints**
- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`
- `lists[i]` is sorted in **ascending order**.
- The sum of `lists[i]`.length won't exceed `10^4`.

---   
---
## **Attempts**

### *Attempt 1*
MAR 14 2021

Attempted Solution:
```
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

```

Success!
- **Runtime**: **112 ms**, faster than **73.40%** of JavaScript online submissions for Merge k Sorted Lists.
- **Memory Usage**: **45.5 MB**, less than **26.24%** of JavaScript online submissions for Merge k Sorted Lists.

