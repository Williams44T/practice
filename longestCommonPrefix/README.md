# [**Longest Common Prefix**](https://leetcode.com/problems/longest-common-prefix/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)
- [Attempt 2 - Success!](#attempt-2)

---
---
## **Prompt**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

---
---
## **Examples**

### *Example 1*

- **Input:** `strs = ["flower","flow","flight"]`
- **Output:** `"fl"`

---
### *Example 2*

- **Input:** `strs = ["dog","racecar","car"]`
- **Output:** `""`
- **Explanation:** There is no common prefix among the input strings.

---
---
## **Constraints**
- `0 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lower-case English letters.

---   
---
## **Attempts**

### *Attempt 1*
MAR 01 2021

Attempted Solution:
```
let longestCommonPrefix = function(strs) {
    let lcp = '';
    
    for (let i = 0; i < strs[0].length; i++) {
      let char = strs[0][i];

      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== char) { return lcp; }
      }

      lcp += char;
    }

    return lcp;
};
```
Failed Test:
- **Input:** `[]`
- **Expected:** `""`
- **Actual:** `Runtime Error`
- **Explanation:** Can't read property length of `strs[0]` when there are no strings!

---
### *Attempt 2*
MAR 01 2021

Attempted Solution:
```
let longestCommonPrefix = function(strs) {
  if (!strs.length) { return ''; }
  let lcp = '';
  
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) { return lcp; }
    }

    lcp += char;
  }

  return lcp;
};
```

Success!
- **Runtime**: **92 ms**, faster than **43.37%** of JavaScript online submissions for Longest Common Prefix.
- **Memory Usage**: **39.9 MB**, less than **39.15%** of JavaScript online submissions for Longest Common Prefix.


