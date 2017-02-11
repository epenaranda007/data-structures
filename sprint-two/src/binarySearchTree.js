var BinarySearchTree = function(value) {
  var bstObj = Object.create(bstMethods);
  bstObj.value = value;
  bstObj.left = null;
  bstObj.right = null;

  return bstObj;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var node = new BinarySearchTree(value);
  if (node.value < this.value) {
    if (!this.left) {
      this.left = node;
    } else {
      this.left.insert(value);
    }
  } else if (node.value > this.value) {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.left && value < this.value) {
    return this.left.contains(value);
  } else if (this.right && value > this.value) {
    return this.right.contains(value);
  }
  return false;
};

bstMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log n)
 contains: O(log n)
 depthFirstLog: O(n) 
*/


