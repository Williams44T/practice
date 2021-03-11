function isValid(s) {
    let close = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
    let stack = [];
    for (let paren of s) {
      if (close[paren]) { 
        if (close[paren] !== stack.pop()) { return false; }
      } else {
        stack.push(paren); 
      }
    }
    return !stack.length;
}