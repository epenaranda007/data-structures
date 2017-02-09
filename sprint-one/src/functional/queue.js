var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var dqCounter = 0;
  var eqCounter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[eqCounter] = value;
    eqCounter++;
    length++;
  };

  someInstance.dequeue = function() {
    var dqd = storage[dqCounter];
    delete storage[dqCounter];
    dqCounter++;

    if (length > 0) {
      length--;
    }
    return dqd;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
