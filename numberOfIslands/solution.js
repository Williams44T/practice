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

let input = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"],
];
numIslands(input);
