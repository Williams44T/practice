var Trie = function() {
  this.data = {};
};

Trie.prototype.insert = function(word) {
  var node = this.data;
  for (char of word) {
    if (!node[char]) { node[char] = {}; }
    node = node[char];
  }

  node.end = true;
};

Trie.prototype.search = function(word) {
  var node = this.data;
  for (char of word) {
    if (!node[char]) { return false; }
    node = node[char];
  }

  return !!node.end;
};

Trie.prototype.startsWith = function(prefix) {
  var node = this.data;
  for (char of prefix) {
    if (!node[char]) { return false; }
    node = node[char];
  }

  return true;
};