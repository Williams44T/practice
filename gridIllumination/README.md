# [**Grid Illumination**](https://leetcode.com/problems/grid-illumination/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  
- [Example 2](#example-2)  
- [Example 3](#example-3)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)
- [Attempt 2 - Success](#attempt-2)

---
---
## **Prompt**
You are given a `grid` of size `N x N`, and each cell of this grid has a lamp that is initially **turned off**.

You are also given an array of lamp positions `lamps`, where `lamps[i] = [row`<sub>`i`</sub>`, col`<sub>`i`</sub>`]` indicates that the lamp at `grid[row`<sub>`i`</sub>`][col`<sub>`i`</sub>`]` is turned on. When a lamp is turned on, it **illuminates its cell** and **all other cells** in the same **row, column, or diagonal**.

Finally, you are given a query array `queries`, where `queries[i] = [rowi, coli]`. For the `i`<sup>`th`</sup> query, determine whether `grid[row`<sub>`i`</sub>`][col`<sub>`i`</sub>`]` is illuminated or not. After answering the `i`<sup>`th`</sup> query, turn off the lamp at `grid[row`<sub>`i`</sub>`][col`<sub>`i`</sub>`]` and its **8 adjacent lamps** if they exist. A lamp is adjacent if its cell shares either a side or corner with `grid[row`<sub>`i`</sub>`][col`<sub>`i`</sub>`]`.

Return an array of integers `ans`, where `ans[i]` should be `1` if the lamp in the `i`<sup>`th`</sup> query was illuminated, or `0` if the lamp was not.

---
---
## **Examples**

### *Example 1*
![](https://assets.leetcode.com/uploads/2020/08/19/illu_1.jpg)

- **Input:** `N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]`
- **Output:** `[1,0]`
- **Explanation:**  

We have the initial grid with all lamps turned off. In the above picture we see the grid after turning on the lamp at `grid[0][0]` then turning on the lamp at `grid[4][4]`.
The `0`<sup>`th`</sup> query asks if the lamp at `grid[1][1]` is illuminated or not (the blue square). It is illuminated, so set `ans[0] = 1`. Then, we turn off all lamps in the red square.

![](https://assets.leetcode.com/uploads/2020/08/19/illu_step1.jpg)

The `1`<sup>`st`</sup> query asks if the lamp at `grid[1][0]` is illuminated or not (the blue square). It is not illuminated, so set `ans[1] = 0`. Then, we turn off all lamps in the red rectangle.

![](https://assets.leetcode.com/uploads/2020/08/19/illu_step2.jpg)

---
### *Example 2*
- **Input:** `N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]`
- **Output:** `[1,1]`

---
### *Example 3*
- **Input:** `N = 5, lamps = [[0,0],[0,4]], queries = [[0,4],[0,1],[1,4]]`
- **Output:** `[1,1,0]`

---
---
## **Constraints**
- `1 <= N <= 109`
- `0 <= lamps.length <= 20000`
- `lamps[i].length == 2`
- `0 <= lamps[i][j] < N`
- `0 <= queries.length <= 20000`
- `queries[i].length == 2`
- `0 <= queries[i][j] < N`

---   
---
## **Attempts**

### *Attempt 1*
FEB 24 2021

Attempted Solution:
```
let toggleLamp = function(grid, row, col, val) {
  let {lamps, rows, cols, upDiags, downDiags } = grid;

  lamps[`${row}+${col}`] = val;
  rows[row] ? rows[row] += val : rows[row] = val;
  cols[col] ? cols[col] += val : cols[col] = val;
  upDiags[row + col] ? upDiags[row + col] += val : upDiags[row + col] = val;
  downDiags[row - col] ? downDiags[row - col] += val : downDiags[row - col] = val;
}

let turnOffLamp = function(grid, row, col) {
  if (grid.lamps[`${row}+${col}`] === 1) { 
    toggleLamp(grid, row, col, -1); 
  }
}

let gridIllumination = function(N, lamps, queries) {
  let grid = {
    lamps: {},
    rows: {},
    cols: {},
    upDiags: {},
    downDiags: {},
  };
  
  lamps.forEach(([row, col]) => toggleLamp(grid, row, col, 1));
  
  let result = [];
  queries.forEach(([row, col]) => {
      if (
        grid.rows[row] ||
        grid.cols[col] ||
        grid.upDiags[row + col] ||
        grid.downDiags[row - col]
      ) { 
        result.push(1); 
      } else {
        result.push(0);
      }

      turnOffLamp(grid, row, col);
      turnOffLamp(grid, --row, col);
      turnOffLamp(grid, row, ++col);
      turnOffLamp(grid, ++row, col);
      turnOffLamp(grid, ++row, col);
      turnOffLamp(grid, row, --col);
      turnOffLamp(grid, row, --col);
      turnOffLamp(grid, --row, col);
      turnOffLamp(grid, --row, col);
  });
  
  return result;
};
```

Failed Test:
- **Input:** 
```
6
[[2,5],[4,2],[0,3],[0,5],[1,4],[4,2],[3,3],[1,0]]
[[4,3],[3,1],[5,3],[0,5],[4,4],[3,3]]
```
- **Expected:** `[1,1,1,1,1,1]`
- **Actual:** `[1,0,1,1,0,1]`
- **Explanation:** This input places two lamps on the same square. So although my solution turns one of these off after the first query, the other one remains on. I should change my solution to only allow one lamp per square.

---
### *Attempt 2*
FEB 24 2021

Attempted Solution:
```
let toggleLamp = function(grid, row, col, val) {
  if (val === 1 && grid.lamps[`${row}+${col}`]) { return; }
  let {lamps, rows, cols, upDiags, downDiags } = grid;

  lamps[`${row}+${col}`] = val;
  rows[row] ? rows[row] += val : rows[row] = val;
  cols[col] ? cols[col] += val : cols[col] = val;
  upDiags[row + col] ? upDiags[row + col] += val : upDiags[row + col] = val;
  downDiags[row - col] ? downDiags[row - col] += val : downDiags[row - col] = val;
}

let turnOffLamp = function(grid, row, col) {
  if (grid.lamps[`${row}+${col}`] === 1) { 
    toggleLamp(grid, row, col, -1); 
  }
}

let gridIllumination = function(N, lamps, queries) {
  let grid = {
    lamps: {},
    rows: {},
    cols: {},
    upDiags: {},
    downDiags: {},
  };
  
  lamps.forEach(([row, col]) => toggleLamp(grid, row, col, 1));
  
  let result = [];
  queries.forEach(([row, col]) => {
      if (
        grid.rows[row] ||
        grid.cols[col] ||
        grid.upDiags[row + col] ||
        grid.downDiags[row - col]
      ) { 
        result.push(1); 
      } else {
        result.push(0);
      }

      turnOffLamp(grid, row, col);
      turnOffLamp(grid, --row, col);
      turnOffLamp(grid, row, ++col);
      turnOffLamp(grid, ++row, col);
      turnOffLamp(grid, ++row, col);
      turnOffLamp(grid, row, --col);
      turnOffLamp(grid, row, --col);
      turnOffLamp(grid, --row, col);
      turnOffLamp(grid, --row, col);
  });
  
  return result;
};
```

Success!

- **Runtime**: **884 ms**, faster than **34.09%** of JavaScript online submissions for Grid Illumination.
- **Memory Usage**: **72.9 MB**, less than **63.64%** of JavaScript online submissions for Grid Illumination.