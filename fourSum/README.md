# [**Four Sum**](https://leetcode.com/problems/4sum/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)

---
---
## **Prompt**
Given an array `nums` of *n* integers and an integer `target`, are there elements *a*, *b*, *c*, and *d* in `nums` such that *a* + *b* + *c* + *d* = `target`? Find all unique quadruplets in the array which gives the sum of `target`.

**Notice** that the solution set must not contain duplicate quadruplets.

---
---
## **Examples**

### *Example 1*

- **Input:** `nums = [1,0,-1,0,-2,2], target = 0`  
- **Output:** `[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`  

---
### *Example 2*

- **Input:** `nums = [], target = 0`  
- **Output:** `[]`

---
---
## **Constraints**
- `0 <= nums.length <= 200`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`

---
---
## **Attempts**

### *Attempt 1*
FEB 17 2021

Attempted Solution:
```
var fourSum = function(nums, target) {
  var result = [];
  var visited = new Map;
  nums.sort();

  for (var i = 0; i < nums.length - 3; i++) {
    var a = nums[i];
    if (a > target) { break; }

    for (var j = i + 1; j < nums.length - 2; j++) {
      var b = nums[j];
      if (a + b > target) { break; }

      for (var k = j + 1; k < nums.length - 1; k++) {
        var c = nums[k];
        if (a + b + c > target) { break; }

        for (var l = k + 1; l < nums.length; l++) {
          var d = nums[l];
          if (a + b + c + d > target) { break; }

          if (a + b + c + d === target) {
            var key = '' + a + b + c + d;

            if (!visited.has(key)) {
              result.push([a, b, c, d]);
              visited.set(key);
            }
          }
        }
      }
    }
  }

  return result;
};
```
Failed Test
- **Input:** `nums = [-2,0,5,-1,-5,5,3], target = -2`
- **Expected:** `[[-5,-2,0,5]]`
- **Actual:** `[]`
- **Explanation:** My understanding of an array's default sort method was off. I expected the input array to sort to `[-5,-2,-1,0,3,5,5]`, but it instead sorted to `[-1,-2,-5,0,3,5,5]` causing the first loop to break immediately, never finding any results. I'll remedy this by passing in a function to the sort method.



