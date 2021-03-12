# [**Generate Parentheses**](https://leetcode.com/problems/generate-parentheses/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 - Success](#attempt-1)

---
---
## **Prompt**
Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.

---
---
## **Examples**

### *Example 1*

- **Input:** `n = 3`
- **Output:** `["((()))","(()())","(())()","()(())","()()()"]`

---
### *Example 2*

- **Input:** `n = 1`
- **Output:** `["()"]`

---
---
## **Constraints**
- `1 <= n <= 8`

---   
---
## **Attempts**

### *Attempt 1*
MAR 11 2021

Attempted Solution:
```
function generateParenthesis(n) {
  let parens = ['(', ')'];
  let counts = { '(': 0, ')': 0 };
  let combos = [];
  let combo = [];

  (function buildCombo() {
    if (combo.length === n * 2) { return combos.push(combo.join('')); }
    for (let i = 0; i < parens.length; i++) {
      if (
        parens[i] === '(' && counts['('] < n ||
        parens[i] === ')' && counts[')'] < counts['(']
      ) {
        combo.push(parens[i]);
        counts[parens[i]]++;
        buildCombo();
        combo.pop() === '(' ? counts['(']-- : counts[')']--;
      }
    }
  })();

  return combos;
}
```

Success!

- **Runtime**: **84 ms**, faster than **49.50%** of JavaScript online submissions for Generate Parentheses.
- **Memory Usage**: **39.8 MB**, less than **35.70%** of JavaScript online submissions for Generate Parentheses.

