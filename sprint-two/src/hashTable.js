var HashTable = function() {
  this.counter = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.nodes = [];
};

HashTable.prototype.insert = function(k, v) {
  this.counter++;
  
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  this.nodes.push([k, v]);
  this._storage.set(index, v, this._limit);

  if (this.counter >= this._limit * .75) {
    this._limit *= 2;
    this.reHash();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined, this._limit);
  
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i][0] === k) {
      this.nodes.splice(i, 1);
    }
  }

  if (this.counter <= this._limit * .25) {
    this._limit /= 2;
    this.reHash();
  }
  this.counter--;
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

HashTable.prototype.reHash = function () {
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this.nodes.length; i++) {
    var tuple = this.nodes[i];
    var key = tuple[0];
    var value = tuple[1];
    var index = this.getIndexBelowMaxForKey(key, this._limit);
    this._storage.set(index, value, this._limit); 
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert: constant
  retrieve: constant
  remove: constant
 */