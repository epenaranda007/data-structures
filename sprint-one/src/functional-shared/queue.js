var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.length = 0;
  newQueue.dqCounter = 0;
  newQueue.eqCounter = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.eqCounter] = val;
    this.eqCounter++;
    this.length++;
  },

  dequeue: function() {
    var dqd = this.storage[this.dqCounter];
    delete this.storage[this.dqCounter];
    this.dqCounter++;

    if (this.length > 0) {
      this.length--;
    }

    return dqd;
  },

  size: function() {
    return this.length;
  }
};


