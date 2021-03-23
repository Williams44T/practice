# [**Valid Sudoku**](https://leetcode.com/problems/valid-sudoku/)

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

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

---
---
## **Examples**

### *Example 1*

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

**Input:** `board = `
```   
[["5","3",".",".","7",".",".",".","."]  
,["6",".",".","1","9","5",".",".","."]  
,[".","9","8",".",".",".",".","6","."]  
,["8",".",".",".","6",".",".",".","3"]  
,["4",".",".","8",".","3",".",".","1"]  
,["7",".",".",".","2",".",".",".","6"]  
,[".","6",".",".",".",".","2","8","."]  
,[".",".",".","4","1","9",".",".","5"]  
,[".",".",".",".","8",".",".","7","9"]]  
```
**Output:** `true`

---
### *Example 2*

**Input:** `board = `
```
[["8","3",".",".","7",".",".",".","."]  
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
```
**Output:** `false`  
**Explanation:** Same as Example 1, except with the 5 in the top left corner being modified to `8`. Since there are two 8's in the top left `3x3` sub-box, it is invalid.

---
---
## **Constraints**
- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit or `'.'`.

---   
---
## **Attempts**

### *Attempt 1*
MAR 23 2021

Attempted Solution:
```
function isValidSudoku(board) {
    let check = { rows: {}, cols: {}, boxes: {} };
    for (let i = 0; i < 9; i++) {
        check.rows[i] = {};
        check.cols[i] = {};
        check.boxes[i] = {};
    }
    let boxes = [[0,1,2], [3,4,5], [6,7,8]];

    let num, box;
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            num = board[row][col];
            if (num === '.') { continue; }
            if (check.rows[row][num]) { return false; }
            if (check.cols[col][num]) { return false; }

            box = boxes[Math.floor(row / 3)][Math.floor(col / 3)];
            if (check.boxes[box][num]) { return false; }

            check.rows[row][num] = true;
            check.cols[col][num] = true;
            check.boxes[box][num] = true;
        }
    }

    return true;
}
```

Success

- **Runtime**: **108 ms**, faster than **48.99%** of JavaScript online submissions for Valid Sudoku.
- **Memory Usage**: **42.9 MB**, less than **45.35%** of JavaScript online submissions for Valid Sudoku.
