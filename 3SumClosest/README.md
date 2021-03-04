# [**3Sum Closest**](https://leetcode.com/problems/3sum-closest/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 - Success!](#attempt-1)

---
---
## **Prompt**
Given an array `nums` of *n* integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.

---
---
## **Examples**

### *Example 1*

- **Input:** `nums = [-1,2,1,-4], target = 1`
- **Output:** `2`
- **Explanation:** The sum that is closest to the target is `2`. `(-1 + 2 + 1 = 2)`.

---
---
## **Constraints**
- `3 <= nums.length <= 10^3`
- `-10^3 <= nums[i] <= 10^3`
- `-10^4 <= target <= 10^4`

---   
---
## **Attempts**

### *Attempt 1*
MAR 03 2021

Attempted Solution:
```
let threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let sum = nums[0] + nums[1] + nums[2];
  let closest = Math.abs(target - sum);
  let i = 0;

  while (i < nums.length - 2) {
    if (nums[i] > 0 && nums[i] > target) { return sum; }
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let temp = nums[i] + nums[j];
      if (temp > 0 && temp > target) { return sum; }
      temp += nums[k];
      if (temp === target) { return temp; }

      if (Math.abs(target - temp) < closest) {
        sum = temp;
        closest = Math.abs(target - temp);
      }

      temp < target ? j++ : k--;
    }

    i++;
  }

  return sum;
};
```

Success!

- **Runtime**: **84 ms**, faster than **87.82%** of JavaScript online submissions for 3Sum Closest.
- **Memory Usage**: **39.7 MB**, less than **18.47%** of JavaScript online submissions for 3Sum Closest.


