var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var anotherStack = Object.create(stackMethods);
  anotherStack.storage = {};
  anotherStack.length = 0;

  return anotherStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function() {
    var popped = this.storage[this.length - 1];
    delete this.storage[this.length - 1];

    if (this.length > 0) {
      this.length--;
    }

    return popped;
  },

  size: function() {
    return this.length;

  }
};

