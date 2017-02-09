var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var anotherQueue = Object.create(queueMethods);
  anotherQueue.storage = {};
  anotherQueue.length = 0;
  anotherQueue.dqc = 0;
  anotherQueue.eqc = 0;


  return anotherQueue;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.eqc] = val;
    this.eqc++;
    this.length++;
  },

  dequeue: function() {
    var dequeued = this.storage[this.dqc];
    delete this.storage[this.dqc];
    this.dqc++;
    if ( this.length > 0) {
      this.length--;
    }
    return dequeued;
  },

  size: function() {
    return this.length;
  }

};
