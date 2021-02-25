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