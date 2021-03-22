# [**Number of Islands**](https://leetcode.com/problems/number-of-islands/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1 - Success](#attempt-1)
- [Attempt 2 - Success](#attempt-2)

---
---
## **Prompt**

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return *the number of islands*.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

---
---
## **Examples**

### *Example 1*

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

---
### *Example 2*

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

---
---
## **Constraints**
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`.

---   
---
## **Attempts**

### *Attempt 1*
MAR 21 2021

Attempted Solution:
```
function getNextStart(r, c, seen, grid) {
    if (!seen[r + '|' + c]) { 
        seen[r + '|' + c] = true;
        if (grid[r][c] === '1') { return [r, c]; }
    }
    if (++c === grid[r].length) {
        r++;
        c = 0;
    }
    return grid[r] ? getNextStart(r, c, seen, grid) : [null];
}

function scan(r, c, seen, grid, island) {
    if (!seen[r + '|' + c]) {
        seen[r + '|' + c] = true;
        if (grid[r][c] === '1') { island.push([r, c]); }
    }
}

function scanEdges(land, seen, grid, island) {
    let [r, c] = land;
    c++;
    if (c < grid[r].length) { scan(r, c, seen, grid, island); }
    r++;
    c--;
    if (r < grid.length) { scan(r, c, seen, grid, island); }
    r--;
    c--;
    if (c >= 0) { scan(r, c, seen, grid, island); }
    r--;
    c++;
    if (r >= 0) { scan(r, c, seen, grid, island); }
}

function numIslands(grid) {
    let islands = 0;
    let seen = {};
    let [row, col] = getNextStart(0, 0, seen, grid);
    let island = [[row, col]];
    while (row !== null) {
        while (island.length) {
            scanEdges(island.pop(), seen, grid, island);
            if (!island.length) { islands++; }
        }
        [row, col] = getNextStart(row, col, seen, grid);
        island.push([row, col]);
    }
    return islands;
}
```

Success

- **Runtime**: **156 ms**, faster than **7.55%** of JavaScript online submissions for Number of Islands.
- **Memory Usage**: **55.4 MB**, less than **5.14%** of JavaScript online submissions for Number of Islands.

### *Attempt 2*

Attempted Solution:
MAR 21 2021

```
function numIslands(grid) {
    function explore(r, c) {
        if (!grid[r] || grid[r][c] !== '1') { return; }
        grid[r][c] = 'X';
        explore(r, ++c);
        explore(++r, --c);
        explore(--r, --c);
        explore(--r, ++c);
    }

    let islands = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                islands++;
                explore(row, col);
            }
        }
    }
    return islands;
}
```

Success! After reviewing other solutions

- **Runtime**: **80 ms**, faster than **93.09%** of JavaScript online submissions for Number of Islands.
- **Memory Usage**: **39.4 MB**, less than **88.56%** of JavaScript online submissions for Number of Islands.
