var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;

  

};


Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  var ppd = this.storage[this.length - 1];
  delete this.storage[this.length - 1];

  if (this.length > 0) {
    this.length--;
  }
  return ppd;
};

Stack.prototype.size = function() {
  return this.length;
};



