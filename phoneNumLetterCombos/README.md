# [**Letter Combinations of a Phone Number**](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 - Success!](#attempt-1)

---
---
## **Prompt**
Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.  

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

---
---
## **Examples**

### *Example 1*

- **Input:** `digits = "23"`
- **Output:** `["ad","ae","af","bd","be","bf","cd","ce","cf"]`

---
### *Example 2*

- **Input:** `digits = ""`
- **Output:** `[]`

---
### *Example 3*

- **Input:** `digits = "2"`
- **Output:** `["a","b","c"]`

---
---
## **Constraints**
- `0 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9'].`

---   
---
## **Attempts**

### *Attempt 1*
MAR 09 2021

Attempted Solution:
```
const keypad = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

function letterCombinations(digits) {
  let buttons = digits.split('').map(digit => keypad[digit]);
  let combos = [];

  function getCombos(button, combo = '') {
    if (!buttons[button]) { return; }
    for (let i = 0; i < buttons[button].length; i++) {
      combo += buttons[button][i];
      if (combo.length === digits.length) { combos.push(combo); }
      getCombos(button + 1, combo); 
      combo = combo.slice(0, combo.length - 1);
    }
  }
  getCombos(0);

  return combos;
}

```

Success! 

- **Runtime**: **80 ms**, faster than **48.98%** of JavaScript online submissions for Letter Combinations of a Phone Number.
- **Memory Usage**: **37.8 MB**, less than **98.89%** of JavaScript online submissions for Letter Combinations of a Phone Number.

