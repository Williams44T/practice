# [**Container with Most Water**](https://leetcode.com/problems/container-with-most-water/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  
- [Example 4](#example-4)   

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)

---
---
## **Prompt**
Given `n` non-negative integers `a`<sub>`1`</sub>`, a`<sub>`2`</sub>`, ..., a`<sub>`n`</sub>, where each represents a point at coordinate `(i, a`<sub>`i`</sub>`)`. `n` vertical lines are drawn such that the two endpoints of the line `i` is at `(i, a`<sub>`i`</sub>`)` and `(i, 0)`. Find two lines, which, together with the x-axis, forms a container, such that the container contains the most water.

**Notice** that you may not slant the container.

---
---
## **Examples**

### *Example 1*
![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

- **Input:** `height = [1,8,6,2,5,4,8,3,7]`
- **Output:** `49`
- **Explanation:** The above vertical lines are represented by array `[1,8,6,2,5,4,8,3,7]`. In this case, the max area of water (blue section) the container can contain is `49`.

---
### *Example 2*
- **Input:** `height = [1,1]`
- **Output:** `1`

---
### *Example 3*
- **Input:** `height = [4,3,2,1,4]`
- **Output:** `16`

---
### *Example 4*
- **Input:** `height = [1,2,1]`
- **Output:** `2`

---
---
## **Constraints**
- `n == height.length`
- `2 <= n <= 3 * 10^4`
- `0 <= height[i] <= 3 * 10^4`

---   
---
## **Attempts**

### *Attempt 1*
FEB 25 2021

Attempted Solution:
```
let maxArea = function(nums) {
  let L = 0;
  let R = nums.length - 1;
  let max = Math.min(nums[L], nums[R]) * (R - L);

  while (R - L > 1) {
    if (nums[L] <= nums[R]) {
      if (nums[L + 1] > nums[L++]) {
        max = Math.max(max, Math.min(nums[L], nums[R]) * (R - L));
      }
    } else {
      if (nums[R - 1] > nums[R--]) {
        max = Math.max(max, Math.min(nums[L], nums[R]) * (R - L));
      }
    }
  }
  
  return max;
};
```

Success!
- **Runtime**: **80 ms**, faster than **89.24%** of JavaScript online submissions for Container With Most Water.
- **Memory Usage**: **41.3 MB**, less than **31.41%** of JavaScript online submissions for Container With Most Water.