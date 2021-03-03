# [**3Sum**](https://leetcode.com/problems/3sum/)

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
Given an array `nums` of n integers, are there elements *a*, *b*, *c* in `nums` such that *a* + *b* + *c* = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

---
---
## **Examples**

### *Example 1*

- **Input:** `nums = [-1,0,1,2,-1,-4]`
- **Output:** `[[-1,-1,2],[-1,0,1]]`

---
### *Example 2*

- **Input:** `nums = []`
- **Output:** `[]`

---
### *Example 3*

- **Input:** `nums = [0]`
- **Output:** `[]`

---
---
## **Constraints**
- `0 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

---   
---
## **Attempts**

### *Attempt 1*
MAR 02 2021

Attempted Solution:
```
let threeSum = function(nums) {
  if (nums.length < 3) { return []; }
  let result = [];
  let counts = {};
  let seen = {};

  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (let one in counts) {
    counts[one]--;

    for (let two in counts) {
      if (counts[two] === 0) { continue; }
      counts[two]--;
      let three = 0 - one - two;

      if (counts[three] > 0) {
        let triple = [+one, +two, +three];
        let key = triple.sort((a, b) => a - b).join('');

        if (!seen[key]) {
          result.push(triple);
          seen[key] = true;
        }
      }

      counts[two]++;
    }
    
    counts[one]++;
  }

  return result;
};

let nums = Array(3000).fill().map(() => {
  let num = Math.floor(Math.random() * 100000);
  return Math.random() >= .5 ? num : -num;
});
```

Success

- **Runtime**: **4716 ms**, faster than **7.57%** of JavaScript online submissions for 3Sum.
- **Memory Usage**: **73.5 MB**, less than **5.02%** of JavaScript online submissions for 3Sum.


