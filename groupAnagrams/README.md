# [**Group Anagrams**](https://leetcode.com/problems/group-anagrams/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)

---
---
## **Prompt**
Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

---
---
## **Examples**

### *Example 1*

- **Input:** `strs = ["eat","tea","tan","ate","nat","bat"]`  
- **Output:** `[["bat"],["nat","tan"],["ate","eat","tea"]]`  

---
### *Example 2*

- **Input:** `strs = [""]`  
- **Output:** `[[""]]`

---
### *Example 3*

- **Input:** `strs = ["a"]`  
- **Output:** `[["a"]]`

---
---
## **Constraints**
- `1 <= strs.length <= 104`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lower-case English letters.

---
---
## **Attempts**

### *Attempt 1*
FEB 12 2021

Attempted Solution:
```
var groupAnagrams = function(strs) {
  grouped = [];
  anagrams = [];

  strs.forEach(str => {
    var charCount = getCharCount(str);
    var isExistingAnagram = false;
      
    for (var i = 0; i < anagrams.length; i++) {
      var anagram = anagrams[i];
      var anagramMatch = true;
      
      for (char in charCount) {
        if (anagram[char] !== charCount[char]) {
          anagramMatch = false;
          break; 
        }
      }
        
      if (anagramMatch) { 
        isExistingAnagram = true;
        grouped[anagram.idx].push(str);
        break; 
      }
    }

    if (!isExistingAnagram) {
      grouped[anagrams.length] = [];
      charCount.idx = anagrams.length;
      anagrams.push(charCount);
      grouped[charCount.idx].push(str);
    }
  });

  return grouped;
};

var getCharCount = (str) => {
  var counts = {};

  str.split('').forEach(char => {
    if (counts[char] === undefined) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  });

  return counts;
};
```
Failed Test:
- **Input:** `strs = ["ac", "c"]`
- **Expected:** `[["ac"],["c"]]`
- **Actual:** `[["ac", "c"]]`
- **Explanation:** My solution said, "Hey, there's one 'c' in "c" and one 'c' in "ac", and there are no more characters in "c" to check, so these must be anagrams!" I'll have to do a total character check before I start checking each character. This could even make my solution faster.

---
### *Attempt 2*
FEB 12 2021

Success!

- **Runtime**: **9064 ms**, faster than **5.03%** of JavaScript online submissions for Group Anagrams.
- **Memory Usage**: **67.4 MB**, less than **5.03%** of JavaScript online submissions for Group Anagrams.

