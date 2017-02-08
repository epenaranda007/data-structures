var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.length = 0;

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    var popd = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    if (this.length > 0 ) {
      this.length--;
    }
    return popd;
  },
  size: function() {
    return this.length;
  }
};



