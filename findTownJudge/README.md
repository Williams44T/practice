# [**Find The Town Judge**](https://leetcode.com/problems/find-the-town-judge/)

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
In a town, there are `N` people labelled from `1` to `N`.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:
1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.

You are given `trust`, an array of pairs `trust[i] = [a, b]` representing that the person labelled `a` trusts the person labelled `b`.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return `-1`.

---
---
## **Examples**

### *Example 1*

- **Input:** `N = 2, trust = [[1,2]]`
- **Output:** `2`

---
### *Example 2*

- **Input:** `N = 3, trust = [[1,3],[2,3]]`
- **Output:** `3`

---
### *Example 3*

- **Input:** `N = 3, trust = [[1,3],[2,3],[3,1]]`
- **Output:** `-1`

---
### *Example 4*

- **Input:** `N = 3, trust = [[1,2],[2,3]]`
- **Output:** `-1`

---
### *Example 5*

- **Input:** `N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]`
- **Output:** `3`

---
---
## **Constraints**
- `1 <= N <= 1000`
- `0 <= trust.length <= 10^4`
- `trust[i].length == 2`
- `trust[i]` are all different
- `trust[i][0] != trust[i][1]`
- `1 <= trust[i][0], trust[i][1] <= N`

---   
---
## **Attempts**

### *Attempt 1*
MAR 12 2021

Attempted Solution:
```
function findJudge(N, trust) {
    if (trust.length < N - 1) { return -1; }
    if (N === 1) { return 1; }
    let trusted = {};
    let trusting = {};
    for (let pair of trust) {
      trusting[pair[0]] = (trusting[pair[0]] || 0) + 1;
      trusted[pair[1]] = (trusted[pair[1]] || 0) + 1;
    }
    for (let suspect in trusted) {
      if (trusted[suspect] === N - 1 && !trusting[suspect]) {
        return +suspect;
      }
    }
    return -1;
}
```

Success!
- **Runtime**: **112 ms**, faster than **85.38%** of JavaScript online submissions for Find the Town Judge.
- **Memory Usage**: **46.7 MB**, less than **47.67%** of JavaScript online submissions for Find the Town Judge.

