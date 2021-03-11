# [**Valid Parentheses**](https://leetcode.com/problems/valid-parentheses/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  
- [Example 4](#example-4)  
- [Example 5](#example-5)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 - Success!](#attempt-1)

---
---
## **Prompt**
Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

---
---
## **Examples**

### *Example 1*

- **Input:** `s = "()"`
- **Output:** `true`

---
### *Example 2*

- **Input:** `s = "()[]{}"`
- **Output:** `true`

---
### *Example 3*

- **Input:** `s = "(]"`
- **Output:** `false`

---
### *Example 4*

- **Input:** `s = "([)]"`
- **Output:** `false`

---
### *Example 5*

- **Input:** `s = "{[]}"`
- **Output:** `true`


---
---
## **Constraints**
- `1 <= s.length <= 104`
- `s` consists of parentheses only `'()[]{}'`

---   
---
## **Attempts**

### *Attempt 1*
MAR 10 2021

Attempted Solution:
```
function isValid(s) {
    let close = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
    let stack = [];
    for (let paren of s) {
      if (close[paren]) { 
        if (close[paren] !== stack.pop()) { return false; }
      } else {
        stack.push(paren); 
      }
    }
    return !stack.length;
}
```

Success!
- **Runtime**: **72 ms**, faster than **95.80%** of JavaScript online submissions for Valid Parentheses.
- **Memory Usage**: **39.2 MB**, less than **36.77%** of JavaScript online submissions for Valid Parentheses.

