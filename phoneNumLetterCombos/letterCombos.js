const keypad = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

function letterCombinations(digits) {
  let buttons = digits.split('').map(digit => keypad[digit]);
  let combos = [];

  function getCombos(button, combo = '') {
    if (!buttons[button]) { return; }
    for (let i = 0; i < buttons[button].length; i++) {
      combo += buttons[button][i];
      if (combo.length === digits.length) { combos.push(combo); }
      getCombos(button + 1, combo); 
      combo = combo.slice(0, combo.length - 1);
    }
  }
  getCombos(0);

  return combos;
}
