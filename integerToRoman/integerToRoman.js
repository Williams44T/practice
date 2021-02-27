const symbols = {
  1: { single: 'I', five: 'V' },
  10: { single: 'X', five: 'L' },
  100: { single: 'C', five: 'D' },
  1000: { single: 'M' },
};

let intToRoman = function(num, divisor = 1000, roman = '') {
    let key = Math.floor(num / divisor);
    num -= key * divisor;

    if (key < 4) {
      while (key-- > 0) {
        roman += symbols[divisor].single;
      }
    } else if (key === 4) {
      roman += symbols[divisor].single + symbols[divisor].five;
    } else if (key === 5) {
      roman += symbols[divisor].five;
    } else if (key < 9) {
      roman += symbols[divisor].five;
      while (key-- > 5) {
        roman += symbols[divisor].single;
      }
    } else if (key === 9) {
      roman += symbols[divisor].single + symbols[divisor * 10].single;
    }

    if (divisor === 1) { return roman; }
    return intToRoman(num, divisor / 10, roman);
};
