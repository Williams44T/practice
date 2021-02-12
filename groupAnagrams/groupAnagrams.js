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
      var anagramMatch = true;
      
      for (char in charCount) {
        if (anagram[char] !== charCount[char]) {
          anagramMatch = false;
          break; 
        }
      }
        
      if (anagramMatch) { 
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

  return counts;
};