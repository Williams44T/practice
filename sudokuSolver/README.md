# [**Sudoku Solver**](https://leetcode.com/problems/sudoku-solver/)

[Prompt](#prompt)  
[Examples](#examples)
- [Example 1](#example-1)  

[Constraints](#constraints)  
[Attempts](#attempts)  
- [Attempt 1](#attempt-1)  
- [Attempt 2 - Success!](#attempt-2)  

---
---
## **Prompt**

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy **all of the following rules**:

1. Each of the digits `1-9` must occur exactly once in each row.
2. Each of the digits `1-9` must occur exactly once in each column.
3. Each of the digits `1-9` must occur exactly once in each of the 9 `3x3` sub-boxes of the grid.

The `'.'` character indicates empty cells.

---
---
## **Examples**

### *Example 1*

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

**Input:** `board = `
```   
[
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"],
]  
```
**Output:**
```
[
    ["5","3","4","6","7","8","9","1","2"],
    ["6","7","2","1","9","5","3","4","8"],
    ["1","9","8","3","4","2","5","6","7"],
    ["8","5","9","7","6","1","4","2","3"],
    ["4","2","6","8","5","3","7","9","1"],
    ["7","1","3","9","2","4","8","5","6"],
    ["9","6","1","5","3","7","2","8","4"],
    ["2","8","7","4","1","9","6","3","5"],
    ["3","4","5","2","8","6","1","7","9"],
]
```
**Explanation:** The input board is shown above and the only valid solution is shown below:

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)

---
---
## **Constraints**
- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit or `'.'`.
- It is **guaranteed** that the input board has only one solution.

---   
---
## **Attempts**

### *Attempt 1*
MAR 24 2021

Attempted Solution:
```
function solveSudoku(board) {
    let row, col, boxRow, boxCol, i, j;

    //replace empty squares with potential values
    for (row = 0; row < board.length; row++) {
        for (col = 0; col < board[row].length; col++) {
            if (board[row][col] !== '.') { continue; }
            board[row][col] = {
                size: 9,
                nums: { 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1 },
            };
        }
    }

    function markNumUnavailable(num, row, col) {
        if (typeof board[row][col] === 'string') { return; }
        if (board[row][col].nums[num]) {
            delete board[row][col].nums[num];
            //if only one potential value left, mark square with it
            if (--board[row][col].size === 1) {
                board[row][col] = Object.keys(board[row][col].nums)[0];
                assertDominance(board[row][col], row, col);
            }
        }
    }

    function assertDominance(num, row, col) {
        board[row].forEach((_, c) => markNumUnavailable(num, row, c));
        board.forEach((_, r) => markNumUnavailable(num, r, col));
        boxRow = Math.floor(row / 3) * 3;
        boxCol = Math.floor(col / 3) * 3;
        for (i = boxRow; i < boxRow + 3; i++) {
            for (j = boxCol; j < boxCol + 3; j++) {
                markNumUnavailable(num, i, j);
            }
        }
    }

    for (row = 0; row < board.length; row++) {
        for (col = 0; col < board[row].length; col++) {
            if (typeof board[row][col] === 'object') { continue; }
            assertDominance(board[row][col], row, col);
        }
    }
}
```

Failed Test:  
**Input:**
```
[
    [".",".","9","7","4","8",".",".","."],
    ["7",".",".",".",".",".",".",".","."],
    [".","2",".","1",".","9",".",".","."],
    [".",".","7",".",".",".","2","4","."],
    [".","6","4",".","1",".","5","9","."],
    [".","9","8",".",".",".","3",".","."],
    [".",".",".","8",".","3",".","2","."],
    [".",".",".",".",".",".",".",".","6"],
    [".",".",".","2","7","5","9",".","."],
]
```
**Expected Output:**
```
[
    ["5","1","9","7","4","8","6","3","2"],
    ["7","8","3","6","5","2","4","1","9"],
    ["4","2","6","1","3","9","8","7","5"],
    ["3","5","7","9","8","6","2","4","1"],
    ["2","6","4","3","1","7","5","9","8"],
    ["1","9","8","5","2","4","3","6","7"],
    ["9","7","5","8","6","3","1","2","4"],
    ["8","3","2","4","9","1","7","5","6"],
    ["6","4","1","2","7","5","9","8","3"],
]
```
**Actual Output:**
```
[
    [
        {"size":3,"nums":{"3":1,"5":1,"6":1}},
        {"size":3,"nums":{"1":1,"3":1,"5":1}},
        "9",
        "7",
        "4",
        "8",
        {"size":2,"nums":{"1":1,"6":1}},
        {"size":3,"nums":{"1":1,"3":1,"5":1}},
        {"size":3,"nums":{"2":1,"3":1,"5":1}}
    ],
    [
        "7",
        {"size":5,"nums":{"1":1,"3":1,"4":1,"5":1,"8":1}},
        {"size":3,"nums":{"1":1,"3":1,"5":1}},
        "6",
        {"size":2,"nums":{"3":1,"5":1}},
        "2",
        {"size":3,"nums":{"1":1,"4":1,"8":1}},
        {"size":4,"nums":{"1":1,"3":1,"5":1,"8":1}},
        {"size":4,"nums":{"3":1,"4":1,"5":1,"9":1}}
    ],
    [
        {"size":5,"nums":{"3":1,"4":1,"5":1,"6":1,"8":1}},
        "2",
        {"size":3,"nums":{"3":1,"5":1,"6":1}},
        "1",
        {"size":2,"nums":{"3":1,"5":1}},
        "9",
        {"size":4,"nums":{"4":1,"6":1,"7":1,"8":1}},
        {"size":4,"nums":{"3":1,"5":1,"7":1,"8":1}},
        {"size":3,"nums":{"3":1,"4":1,"5":1}}
    ],
    [
        {"size":2,"nums":{"3":1,"5":1}},
        {"size":2,"nums":{"3":1,"5":1}},
        "7",
        "9",
        "8",
        "6",
        "2",
        "4",
        "1"
    ],
    ["2","6","4","3","1","7","5","9","8"],
    ["1","9","8","5","2","4","3","6","7"],
    [
        {"size":3,"nums":{"4":1,"5":1,"9":1}},
        {"size":4,"nums":{"1":1,"4":1,"5":1,"7":1}},
        {"size":2,"nums":{"1":1,
        ...
```
**Explanation:** I mistakenly believed that the approached I used would render a solved puzzle after iterating thru all 81 squares just once.

---
### *Attempt 2*
MAR 25 2021

Attempted Solution:
```
function solveSudoku(board) {
    let rows = {};
    let cols = {};
    let boxes = {};
    for (let i = 0; i < 9; i++) {
        rows[i] = [];
        cols[i] = [];
        boxes[i] = [];
    }

    function toggle(row, col, box, num, bool) {
        rows[row][num] = bool;
        cols[col][num] = bool;
        boxes[box][num] = bool;
    }

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') { continue; }
            toggle(row, col, ~~(row/3)*3 + ~~(col/3), board[row][col], true);
        }
    }
    
    (function solve(row, col) {
        if (row === 8 && col === 9) { return true; }
        if (col === 9) {
            col = 0;
            row++;
        }

        if (board[row][col] !== '.') { return solve(row, ++col); }

        let box = ~~(row/3)*3 + ~~(col/3);
        for (let num = 1; num <= 9; num++) {
            if (rows[row][num]) { continue; }
            if (cols[col][num]) { continue; }
            if (boxes[box][num]) { continue; }
            board[row][col] = String(num);
            toggle(row, col, box, num, true);
            if (solve(row, col + 1)) { return true; }
            toggle(row, col, box, num, false);
        }

        board[row][col] = '.';
    })(0, 0);
}
```

Success! I had view some solutions, but I was on the right track.

- **Runtime**: **100 ms**, faster than **95.18%** of JavaScript online submissions for Sudoku Solver.
- **Memory Usage**: **40.8 MB**, less than **50.30%** of JavaScript online submissions for Sudoku Solver.
