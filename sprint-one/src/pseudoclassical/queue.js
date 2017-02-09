var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.line = {};
  this.length = 0;
  this.dqc = 0;
  this.eqc = 0;

};

Queue.prototype.enqueue = function(value) {
  this.line[this.eqc] = value;
  this.eqc++;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var dqd = this.line[this.dqc];
  delete this.line[this.dqc];
  this.dqc++;
  if (this.length > 0) {
    this.length--;
  }
  return dqd;
};

Queue.prototype.size = function( ) {
  return this.length;
};


