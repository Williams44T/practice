/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var groups = new Map;

  strs.forEach(str => {
    var sorted = str.split('').sort().join('');
    groups.has(sorted) ? groups.get(sorted).push(str) : groups.set(sorted, [str]);
  });

  return [...groups.values()];
};
