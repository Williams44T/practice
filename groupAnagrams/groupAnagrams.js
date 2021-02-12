/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  grouped = [];
  anagrams = [];

  strs.forEach(str => {
    var charCount = getCharCount(str);
    var isExistingAnagram = false;
      
    for (var i = 0; i < anagrams.length; i++) {
      var anagram = anagrams[i];

      if (areAnagrams(charCount, anagram)) {
        isExistingAnagram = true;
        grouped[anagram.idx].push(str);
        break; 
      }
    }

    if (!isExistingAnagram) {
      grouped[anagrams.length] = [];
      charCount.idx = anagrams.length;
      anagrams.push(charCount);
      grouped[charCount.idx].push(str);
    }
  });

  return grouped;
};

var getCharCount = (str) => {
  var counts = {};

  str.split('').forEach(char => {
    if (counts[char] === undefined) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  });

  counts.total = str.length;
  return counts;
};

var areAnagrams = (test, anagram) => {
  if (test.total !== anagram.total) { return false; }

  for (char in test) {
    if (test[char] !== anagram[char]) {
      return false; 
    }
  }
  
  return true;
};