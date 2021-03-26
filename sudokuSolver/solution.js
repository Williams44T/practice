function solveSudoku(board) {
    let rows = Array(9).fill().map(() => []);
    let cols = Array(9).fill().map(() => []);
    let boxes = Array(9).fill().map(() => []);

    function toggle(row, col, box, num, bool) {
        rows[row][num] = bool;
        cols[col][num] = bool;
        boxes[box][num] = bool;
    }

    let blanks = [];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            board[row][col] === '.'
            ? blanks.push([row, col])
            : toggle(row, col, ~~(row/3)*3 + ~~(col/3), board[row][col], true);
        }
    }
    
    (function solve(i) {
        if (i === blanks.length) { return true; }
        let [row, col] = blanks[i];
        let box = ~~(row/3)*3 + ~~(col/3);
        for (let num = 1; num <= 9; num++) {
            if (rows[row][num]) { continue; }
            if (cols[col][num]) { continue; }
            if (boxes[box][num]) { continue; }
            board[row][col] = String(num);
            toggle(row, col, box, num, true);
            if (solve(i + 1)) { return true; }
            toggle(row, col, box, num, false);
        }
        board[row][col] = '.';
    })(0);
    console.log(board);
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

input = [
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
];

solveSudoku(input);