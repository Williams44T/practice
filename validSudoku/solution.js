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

let board = [
 ["5","3",".",".","7",".",".",".","."],
 ["6",".",".","1","9","5",".",".","."],
 [".","9","8",".",".",".",".","6","."],
 ["8",".",".",".","6",".",".",".","3"],
 ["4",".",".","8",".","3",".",".","1"],
 ["7",".",".",".","2",".",".",".","6"],
 [".","6",".",".",".",".","2","8","."],
 [".",".",".","4","1","9",".",".","5"],
 [".",".",".",".","8",".",".","7","9"],
];
console.log(isValidSudoku(board));