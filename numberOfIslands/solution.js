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

let input = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"],
];
numIslands(input);
