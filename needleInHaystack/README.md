# [**Implement strStr()**](https://leetcode.com/problems/implement-strstr/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 - Success](#attempt-1)

---
---
## **Prompt**
Implement `strStr()`.

Return the index of the first occurrence of needle in haystack, or `-1` if `needle` is not part of `haystack`.

**Clarification:**

What should we return when `needle` is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return `0` when `needle` is an empty string. This is consistent to C's `strstr()` and Java's `indexOf()`.

---
---
## **Examples**

### *Example 1*

- **haystack = "hello", needle = "ll"`
- **Output:** `2`

---
### *Example 2*

- **Input:** `haystack = "aaaaa", needle = "bba"`
- **Output:** `-1`

---
### *Example 3*

- **Input:** `haystack = "", needle = ""`
- **Output:** `0`

---
---
## **Constraints**
- `0 <= haystack.length, needle.length <= 5 * 10^4`
- `haystack` and `needle` consist of only lower-case English characters.

---   
---
## **Attempts**

### *Attempt 1*
MAR 19 2021

Attempted Solution:
```
function strStr(str, pattern) {
    if (!pattern) { return 0; }
    let table = getPatternTable(pattern);
    let i = 0;
    let j = 0;

    while (i < str.length) {
        if (str[i] === pattern[j]) {
            i++
            if (j++ === pattern.length - 1) { return i - pattern.length; }
        } else {
            !j ? i++ : j = table[--j];
        }
    }

    return -1;
}

function getPatternTable(str) {
    let table = [0];
    let i = 1;
    let j = 0;

    while (i < str.length) {
        if (str[i] === str[j]) {
            table[i++] = ++j;
        } else {
            !j ? table[i++] = 0 : j = table[--j];
        }
    }

    return table;
}
```

Success!

- **Runtime**: **80 ms**, faster than **70.45%** of JavaScript online submissions for Implement strStr().
- **Memory Usage**: **40.3 MB**, less than **19.77%** of JavaScript online submissions for Implement strStr().
