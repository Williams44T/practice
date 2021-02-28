const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

let romanToInt = function(s, i = 0, int = 0) {
  if (i >= s.length) { return int; }
  let curr = symbols[s[i]];
  let next = symbols[s[i + 1]] || 0;
    
  if (next > curr) {
    int += next - curr
    i += 2;
  } else {
    int += curr;
    i += 1
  }

  return romanToInt(s, i, int);
};