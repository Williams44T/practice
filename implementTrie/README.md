# [**Implement Trie (Prefix Tree)**](https://leetcode.com/problems/implement-trie-prefix-tree/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)

---
---
## **Prompt**
Implement a trie with `insert`, `search`, and `startsWith` methods.

---
---
## **Examples**

### *Example 1*
```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
```
---
---
## **Constraints**
- You may assume that all inputs are consist of lowercase letters `a-z`.
- All inputs are guaranteed to be non-empty strings.

---   
---
## **Attempts**

### *Attempt 1*
FEB 23 2021

Attempted Solution:
```
var Trie = function() {
  this.data = {};
};

Trie.prototype.insert = function(word) {
  var node = this.data;
  for (char of word) {
    if (!node[char]) { node[char] = {}; }
    node = node[char];
  }

  node.end = true;
};

Trie.prototype.search = function(word) {
  var node = this.data;
  for (char of word) {
    if (!node[char]) { return false; }
    node = node[char];
  }

  return !!node.end;
};

Trie.prototype.startsWith = function(prefix) {
  var node = this.data;
  for (char of prefix) {
    if (!node[char]) { return false; }
    node = node[char];
  }

  return true;
};
```

Success!
- **Runtime**: **216 ms**, faster than **54.60%** of JavaScript online submissions for Implement Trie (Prefix Tree).
- **Memory Usage**: **53.7 MB**, less than **81.21%** of JavaScript online submissions for Implement Trie (Prefix Tree).