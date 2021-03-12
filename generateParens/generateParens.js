function generateParenthesis(n) {
  let parens = ['(', ')'];
  let counts = { '(': 0, ')': 0 };
  let combos = [];
  let combo = [];

  (function buildCombo() {
    if (combo.length === n * 2) { return combos.push(combo.join('')); }
    for (let i = 0; i < parens.length; i++) {
      if (
        parens[i] === '(' && counts['('] < n ||
        parens[i] === ')' && counts[')'] < counts['(']
      ) {
        combo.push(parens[i]);
        counts[parens[i]]++;
        buildCombo();
        combo.pop() === '(' ? counts['(']-- : counts[')']--;
      }
    }
  })();

  return combos;
}
