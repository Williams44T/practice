# [**Integer To Roman**](https://leetcode.com/problems/integer-to-roman/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  
- [Example 4](#example-4)  
- [Example 5](#example-5)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 - Success](#attempt-1)

---
---
## **Prompt**
Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.  

|**Symbol** | **Value**|
|-----------|:---------|
|I          | 1        |
|V          | 5        |
|X          | 10       |
|L          | 50       |
|C          | 100      |
|D          | 500      |
|M          | 1000     |
|
  
For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.  

Given an integer, convert it to a roman numeral.

---
---
## **Examples**

### *Example 1*

- **Input:** `num = 3`
- **Output:** `"III"`

---
### *Example 2*

- **Input:** `num = 4`
- **Output:** `"IV"`

---
### *Example 3*

- **Input:** `num = 9`
- **Output:** `"IX"`

---
### *Example 4*

- **Input:** `num = 58`
- **Output:** `"LVIII"`
- **Explanation:** `L = 50, V = 5, III = 3.`

---
### *Example 5*

- **Input:** `num = 1994`
- **Output:** `"MCMXCIV"`
- **Explanation:** `M = 1000, CM = 900, XC = 90 and IV = 4.`

---
---
## **Constraints**
- `1 <= num <= 3999`

---   
---
## **Attempts**

### *Attempt 1*
FEB 26 2021

Attempted Solution:
```
const symbols = {
  1: { single: 'I', five: 'V' },
  10: { single: 'X', five: 'L' },
  100: { single: 'C', five: 'D' },
  1000: { single: 'M' },
};

let intToRoman = function(num, divisor = 1000, roman = '') {
    let key = Math.floor(num / divisor);
    num -= key * divisor;

    if (key < 4) {
      while (key-- > 0) {
        roman += symbols[divisor].single;
      }
    } else if (key === 4) {
      roman += symbols[divisor].single + symbols[divisor].five;
    } else if (key === 5) {
      roman += symbols[divisor].five;
    } else if (key < 9) {
      roman += symbols[divisor].five;
      while (key-- > 5) {
        roman += symbols[divisor].single;
      }
    } else if (key === 9) {
      roman += symbols[divisor].single + symbols[divisor * 10].single;
    }

    if (divisor === 1) { return roman; }
    return intToRoman(num, divisor / 10, roman);
};
```

Success!
- **Runtime**: **156 ms**, faster than **84.53%** of JavaScript online submissions for Integer to Roman.
- **Memory Usage**: **44.8 MB**, less than **86.64%** of JavaScript online submissions for Integer to Roman.