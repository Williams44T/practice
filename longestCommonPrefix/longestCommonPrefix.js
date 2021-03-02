let longestCommonPrefix = function(strs) {
  if (!strs.length) { return ''; }
  let lcp = '';
  
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) { return lcp; }
    }

    lcp += char;
  }

  return lcp;
};

