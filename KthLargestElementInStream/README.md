# [**Kth Largest Element in Stream**](https://leetcode.com/problems/kth-largest-element-in-a-stream/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)
- [Attempt 2](#attempt-2)  
- [Attempt 3](#attempt-3)

---
---
## **Prompt**
Design a class to find the `kth` largest element in a stream. Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

Implement `KthLargest` class:

- `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream of integers `nums`.
- `int add(int val)` Returns the element representing the `kth` largest element in the stream.

---
---
## **Examples**

### *Example 1*

- **Input:**   
`["KthLargest", "add", "add", "add", "add", "add"]`  
`[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]`  
- **Output:** `[null, 4, 5, 5, 8, 8]`  
- **Explanation:**  
```
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4  
kthLargest.add(5);   // return 5  
kthLargest.add(10);  // return 5  
kthLargest.add(9);   // return 8  
kthLargest.add(4);   // return 8
```
---
---
## **Constraints**
- `1 <= k <= 10^4`
- `0 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `-10^4 <= val <= 10^4`
- At most `10^4` calls will be made to `add`.
- It is guaranteed that there will be at least `k` elements in the array when you search for the `kth` element.

---   
---
## **Attempts**

### *Attempt 1*
FEB 22 2021

Attempted Solution:
```
class KthLargest {
  constructor(k, nums) {
    this.k = k - 1;
    this.nums = nums.sort((a, b) => b - a).slice(0, k);
  }
    
  add(val) {
    if (val <= this.nums[this.k]) { return this.nums[this.k]; }
    if (val >= this.nums[0]) {
      this.insert(0, val);
      return this.nums[this.k];
    }

    var right = this.k;
    var left = 0;
    var mid = this.getMid(right, left);
      
    while ((right - left) > 1) {
      if (this.nums[mid] === val) {
        this.insert(mid + 1, val);
        return this.nums[this.k];
      } else if (this.nums[mid] > val) {
        left = mid;
        mid = this.getMid(right, left);
      } else {
        right = mid;
        mid = this.getMid(right, left);
      }
    }
      
    this.insert(right, val);
    return this.nums[this.k];
  }
    
  insert(idx, val) {
    this.nums.splice(idx, 0, val);
    this.nums.pop();
  }
    
  getMid(right, left) {
    return Math.floor((right - left) / 2) + left;
  }
};
```

Failed Test:
- **Input:**  
`["KthLargest","add","add","add","add","add"]`  
`[[1,[]],[-3],[-2],[-4],[0],[4]]`  
- **Expected:** `[null,-3,-2,-2,0,4]`
- **Actual:** `[null,undefined,undefined,undefined,undefined,undefined]`
- **Explanation:** I did not account for an empty `nums` array.

---
### *Attempt 2*
FEB 22, 2021

Attempted Solution
```
class KthLargest {
  constructor(k, nums) {
    this.k = k - 1;
    this.nums = nums.sort((a, b) => b - a).slice(0, k);
  }
    
  add(val) {
    if (this.k === 0) { 
      this.nums[0] = this.nums[0] === undefined ? val : Math.max(this.nums[0], val);
      return this.nums[0];
    }
    if (val <= this.nums[this.k]) { return this.nums[this.k]; }
    if (val >= this.nums[0]) {
      this.insert(0, val);
      return this.nums[this.k];
    }

    var right = this.k;
    var left = 0;
    var mid = this.getMid(right, left);
      
    while ((right - left) > 1) {
      if (this.nums[mid] === val) {
        this.insert(mid + 1, val);
        return this.nums[this.k];
      } else if (this.nums[mid] > val) {
        left = mid;
        mid = this.getMid(right, left);
      } else {
        right = mid;
        mid = this.getMid(right, left);
      }
    }
      
    this.insert(right, val);
    return this.nums[this.k];
  }
    
  insert(idx, val) {
    this.nums.splice(idx, 0, val);
    this.nums.pop();
  }
    
  getMid(right, left) {
    return Math.floor((right - left) / 2) + left;
  }
};
```

Failed Test:
- **Input:**  
`["KthLargest","add","add","add","add","add"]`  
`[[2,[0]],[-1],[1],[-2],[-4],[3]]`  
- **Expected:** `[null,-1,0,0,0,1]`  
- **Actual:** `[null,undefined,undefined,undefined,undefined,undefined]`
- **Explanation:** I did not account for cases were `k` is larger than `nums` length.

---
### *Attempt 3*
FEB 23 2021

Attempted Solution:
```
class KthLargest {
  constructor(k, nums) {
    this.k = k - 1;
    this.nums = this.initialize(k, nums);
  }
    
  initialize (k, nums) {
    nums.sort((a, b) => b - a).slice(0, k);
    if (k - 1 <= nums.length) { nums.push(-10000); } //min val per constraints
    return nums;
  }
    
  add(val) {
    if (val <= this.nums[this.k]) { return this.nums[this.k]; }
    if (val >= this.nums[0]) {
      this.insert(0, val);
      return this.nums[this.k];
    }

    var right = this.k;
    var left = 0;
    var mid = this.getMid(right, left);
      
    while ((right - left) > 1) {
      if (this.nums[mid] === val) {
        this.insert(mid + 1, val);
        return this.nums[this.k];
      } else if (this.nums[mid] > val) {
        left = mid;
        mid = this.getMid(right, left);
      } else {
        right = mid;
        mid = this.getMid(right, left);
      }
    }
      
    this.insert(right, val);
    return this.nums[this.k];
  }
    
  insert(idx, val) {
    this.nums.splice(idx, 0, val);
    this.nums.pop();
  }
    
  getMid(right, left) {
    return Math.floor((right - left) / 2) + left;
  }
};
```

Success! Finally
- **Runtime**: **132 ms**, faster than **98.88%** of JavaScript online submissions for Kth Largest Element in a Stream.
- **Memory Usage**: **47.1 MB**, less than **81.01%** of JavaScript online submissions for Kth Largest Element in a Stream.
