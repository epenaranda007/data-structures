var BinarySearchTree = function(value) {
  //debugger;
  var bstObj = Object.create(bstMethods);
  bstObj.value = value;
  bstObj.left = null;
  bstObj.right = null;

  return bstObj;
};

var bstMethods = {};

bstMethods.insert = function(value, node) {
  node = node || this;
  if (node.value < value) {
    if (node.left === null) {
      var node = BinarySearchTree(value);
      node.left = node;
      return;
    } else {
      this.insert(value, this.left);
    }
  }
};

bstMethods.contains = function(value) {

};

bstMethods.depthFirstLog = function(cb) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
8, 3

*/

