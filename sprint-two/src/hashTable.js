var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined, this._limit);
};

HashTable.prototype.getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
  insert: constant
  retrieve: constant
  remove: constant

 */


