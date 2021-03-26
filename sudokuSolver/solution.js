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

let input = [
    [".",".","9","7","4","8",".",".","."],
    ["7",".",".",".",".",".",".",".","."],
    [".","2",".","1",".","9",".",".","."],
    [".",".","7",".",".",".","2","4","."],
    [".","6","4",".","1",".","5","9","."],
    [".","9","8",".",".",".","3",".","."],
    [".",".",".","8",".","3",".","2","."],
    [".",".",".",".",".",".",".",".","6"],
    [".",".",".","2","7","5","9",".","."]
];

solveSudoku(input);